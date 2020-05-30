using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Drawing;

namespace Проект_version
{
    public class ImageTest// класс для хранения данных о картинках
    {
        //public Bitmap bt { get; set; } // Изображение
        int _number; // поле номер вопроса
        int _No; // поле номер картинки в вопросе
        public int No { get { return _No; } set { if (value > 0 && value < 5) _No = value; } } // свойство номер картинки в вопросе
        public int Number { get { return _number; } set { _number = value; } } // свойство номер вопроса 
        public string path; // путь по которому расположена картинка на компьютере 
    }
}
