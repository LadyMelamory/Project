using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Проект_version
{
    public class Question //класс вопрос
    {
        static public int[] Generate(int from, int number, Random rnd)
        { //метод для генерации случайного порядка вопросов/ответов
            //bool t = false;
            int[] x = new int[from];
            for (int i = 0; i < x.Length; i++)
                x[i] = i;
            for (int i = 0, tmp1, tmp2; i < number; i++)
            {
                tmp1 = x[i];
                tmp2 = rnd.Next(i, number);
                x[i] = x[tmp2];
                x[tmp2] = tmp1;
            }
            bool t = false;
            return x;
        }
        public string question { get; set; } //вопрос
                                             // public string[] Answers { get; set; }
        public List<string> Answers { get; set; } //варианты ответа
        public int[] AnswOrder { get; set; } //порядок ответов в вопросе
                                             // public bool[] CorrectAnsw { get; set; }
                                             // public bool[] UserAnsw { get; set; }
        public List<int> CorrectAnsw { get; set; } // правильные ответы
        public List<int> UserAnsw { get; set; } //ответы пользователя при прохождении
                                                //  public bool Multi { get; set;}
        public Question(string ques, List<string> answ, List<int> corrAnsw, bool multi)
        {
            question = ques;
            Answers = answ;
            CorrectAnsw = corrAnsw;
            UserAnsw = new List<int>();
            //Multi = multi;
            // UserAnsw = new bool[corrAnsw.Length];
        }
        public Question(string ques)
        {
            question = ques;
            Answers = new List<string>();
            CorrectAnsw = new List<int>();
            UserAnsw = new List<int>();
        }

        public void SetAnswers(string[] answ) //метод для установки новых ответов
        {
            int n = 0;
            Answers.Clear();
            CorrectAnsw.Clear();
            for (int j = 0; j < answ.Length; j++)
            {
                int sh = answ[j].IndexOf('#');
                if (sh == 0 || sh == 1)
                {
                    while (j < answ.Length - 1 && (answ[j + 1] == "" || (answ[j + 1][0] != '#' && answ[j + 1][0] != '+' && answ[j + 1][0] != '@')))
                    {
                        answ[j + 1] = answ[j] + answ[j + 1];
                        j++;
                    }
                    int t = answ[j].IndexOf('.');
                    if (t >= 0 && int.TryParse(answ[j].Substring(sh + 1, t - sh - 1), out int res))
                        try
                        {
                            Answers.Add(answ[j].Substring(t + 1));
                            n++;
                            if (answ[j][0] == '+')
                            {
                                CorrectAnsw.Add(n);
                            }
                        }
                        catch { }
                    else try
                        {
                            Answers.Add(answ[j].Substring(answ[j].IndexOf('#') + 1));
                            n++;
                            if (answ[j][0] == '+')
                            {
                                CorrectAnsw.Add(n);
                            }
                        }
                        catch { }
                }
            }
        }
        //  public Question() { }
    }
}
