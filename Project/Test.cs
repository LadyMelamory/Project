using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.IO;
using Word = Microsoft.Office.Interop.Word;

namespace Проект_version
{
    public class Test //класс для хранения теста
    {
        public List<Question> Quest { get; private set; }  //список вопросов теста
        // public bool[] UserAnswers;
        public bool RandomQOrder { get; set; } //случайный ли порядок следования вопросов в тесте
        public int QuestionNumb { get; set; } //количество отображаемых вопросов теста
        public int Time { get; set; } //время в минутах, отведенное на выполнение теста
        public List<ImageTest> Images { get; set; } //список картинок в тесте

        private string[] ReadQ1(string path)//считывание теста из текстового файла
        {
            StreamReader sr = new StreamReader(path, Encoding.Default);
            string s = sr.ReadToEnd();
            sr.Close();
            string AllText = s;//получение всего текста в документе
            AllText = AllText.Replace("\r\n", "$");//замена управляющего символа
            string[] line = AllText.Split(new char[] { '$' });
            return line;
        }

        public void AddQuest(string quest, string[] answ) //добавление нового вопроса
        {
            Question q = new Question(quest);
            if (Quest == null) Quest = new List<Question>();
            int n = 0;
            q.SetAnswers(answ);
            //for (int j = 0; j < answ.Length; j++)
            //{
            //    int sh = answ[j].IndexOf('#');
            //    if (sh == 0 || sh == 1)
            //    {
            //        while (j < answ.Length - 1 && (answ[j + 1] == ""||(answ[j + 1][0] != '#' && answ[j + 1][0] != '+' &&answ[j+1][0]!='@')))
            //        {
            //            answ[j + 1] = answ[j] + answ[j + 1];
            //            j++;
            //        }
            //        int t = answ[j].IndexOf('.');
            //        if (t >= 0 && int.TryParse(answ[j].Substring(sh + 1, t - sh-1), out int res))
            //            try
            //            {
            //                q.Answers.Add(answ[j].Substring(t + 1));
            //                n++;
            //                if (answ[j][0] == '+')
            //                {
            //                    q.CorrectAnsw.Add(n);
            //                }
            //            }
            //            catch { }
            //        else try
            //            {
            //                q.Answers.Add(answ[j].Substring(answ[j].IndexOf('#') + 1));
            //                n++;
            //                if (answ[j][0] == '+')
            //                {
            //                    q.CorrectAnsw.Add(n);
            //                }
            //            }
            //            catch { }
            //    }
            //}
            Quest.Add(q);
        }
        public void DeleteQuest(int number) //удаление вопроса
        {
            if (number < Quest.Count)
            {
                Quest.RemoveAt(number);
                if (QuestionNumb > Quest.Count) QuestionNumb = Quest.Count;
            }
        }
        private string[] ReadQ2(string path) //считывание теста из файла doc/docx
        {
            object os = (object)path;
            object o = System.Reflection.Missing.Value;
            var MSWord = new Word.Application();
            var Doc = MSWord.Documents.Add(ref os, ref o, ref o, ref o);
            var r = Doc.Range();
            string AllText = r.Text;
            AllText = AllText.Replace("\r", "$");//замена управляющего символа
            string[] line = AllText.Split(new char[] { '$' });
            Doc.Close();
            MSWord.Quit();
            return line;
        }
        public Test(string path, bool randOrder, int questNumb, int time)
        {
            if (File.Exists(path))
            {
                var ex = Path.GetExtension(path);
                RandomQOrder = randOrder;
                string[] line = null;
                if (ex == ".txt") { line = ReadQ1(path); }// ReadA1(path); }
                else if (ex == ".docx" || ex == ".doc") line = ReadQ2(path);
                Quest = new List<Question>();
                if (line != null)
                {
                    for (int i = 0; i < line.Length; i++)//формирование списка в вопросов 
                    {
                        if (line[i].Contains("@"))
                        {
                            if (i < line.Length - 1 && line[i][line[i].Length - 1] != '@')
                                do
                                {
                                    line[i + 1] = String.Concat(line[i], " ", line[i + 1]);
                                    i++;
                                } while (i < line.Length - 1 && line[i + 1][line[i + 1].Length - 1] == '@');
                            line[i] = line[i].Substring(1, line[i].Length - 2);
                            List<string> temp = new List<string>();
                            Question q = new Question(line[i]);
                            while (i + 1 < line.Length && line[i + 1] != "" && !line[i + 1].Contains('@'))
                            {
                                i++;
                                int sh = line[i].IndexOf('#'), n = 0;
                                if (sh == 0 || sh == 1)
                                {
                                    while (i < line.Length - 1 && (line[i + 1] == "" || (line[i + 1][0] != '+' && line[i + 1][0] != '@' && line[i + 1][0] != '#')))
                                    {
                                        line[i + 1] = line[i] + line[i + 1];
                                        i++;
                                    }
                                    int t = line[i].IndexOf('.');
                                    if (t >= 0 && int.TryParse(line[i].Substring(sh + 1, t - sh - 1), out int res))
                                        try
                                        {
                                            q.Answers.Add(line[i].Substring(t + 1));
                                            n++;
                                            if (line[i][0] == '+')
                                            {
                                                q.CorrectAnsw.Add(n);
                                            }
                                        }
                                        catch { }
                                    else try
                                        {
                                            q.Answers.Add(line[i].Substring(line[i].IndexOf('#') + 1));
                                            n++;
                                            if (line[i][0] == '+')
                                            {
                                                q.CorrectAnsw.Add(n);
                                            }
                                        }
                                        catch { }
                                }
                            }
                            Quest.Add(q);
                        }
                    }
                }
                if (questNumb <= Quest.Count) QuestionNumb = questNumb;
                else QuestionNumb = Quest.Count;
                Time = time;
            }
        }
        public Test(string path)
        {
            if (File.Exists(path))
            {
                var ex = Path.GetExtension(path);
                string[] line = null;
                if (ex == ".txt") { line = ReadQ1(path); }// ReadA1(path); }
                else if (ex == ".docx") line = ReadQ2(path);
                Quest = new List<Question>();
                if (line != null)
                {
                    for (int i = 0; i < line.Length; i++)//формирование списка в вопросов 
                    {
                        if (line[i].Contains("@"))
                        {
                            if (i < line.Length - 1 && line[i][line[i].Length - 1] != '@')
                                do
                                {
                                    line[i + 1] = String.Concat(line[i], " ", line[i + 1]);
                                    i++;
                                } while (i < line.Length - 1 && line[i + 1][line[i + 1].Length - 1] == '@');
                            line[i] = line[i].Substring(1, line[i].Length - 2);
                            List<string> temp = new List<string>();
                            Question q = new Question(line[i]);
                            while (i + 1 < line.Length && !line[i + 1].Contains('@') && line[i + 1] != "")
                            {
                                i++;
                                int sh = line[i].IndexOf('#'), n = 0;
                                if (sh == 0 || sh == 1)
                                {
                                    while (i < line.Length - 1 && (line[i + 1] == "" || (line[i + 1][0] != '+' && line[i + 1][0] != '@' && line[i + 1][0] != '#')))
                                    {
                                        line[i + 1] = line[i] + line[i + 1];
                                        i++;
                                    }
                                    int t = line[i].IndexOf('.');
                                    if (t >= 0 && int.TryParse(line[i].Substring(sh + 1, t - sh - 1), out int res))
                                        try
                                        {
                                            q.Answers.Add(line[i].Substring(t + 1));
                                            n++;
                                            if (line[i][0] == '+')
                                            {
                                                q.CorrectAnsw.Add(n);
                                            }
                                        }
                                        catch { }
                                    else try
                                        {
                                            q.Answers.Add(line[i].Substring(line[i].IndexOf('#') + 1));
                                            n++;
                                            if (line[i][0] == '+')
                                            {
                                                q.CorrectAnsw.Add(n);
                                            }
                                        }
                                        catch { }
                                }
                            }
                            Quest.Add(q);
                        }
                    }
                }
                QuestionNumb = Quest.Count;
                Time = 60;
            }
        }
        public Test() { }
    }
}
