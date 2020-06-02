using System;
using System.Collections.Generic;

namespace Project
{
    public partial class Teachers
    {
        public Teachers()
        {
            Courses = new HashSet<Courses>();
        }

        public int Idteacher { get; set; }
        public string Name { get; set; }
        public string Surname { get; set; }
        public string Patronymic { get; set; }
        public string Phone { get; set; }
        public int? Idschool { get; set; }
        public int? Idsubject { get; set; }
        public string Email { get; set; }
        public string Password { get; set; }

        public virtual ICollection<Courses> Courses { get; set; }
    }
}
