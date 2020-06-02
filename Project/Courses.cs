using System;
using System.Collections.Generic;

namespace Project
{
    public partial class Courses
    {
        public Courses()
        {
            Tests = new HashSet<Tests>();
        }

        public int Idcourse { get; set; }
        public int Idteachers { get; set; }
        public string Name { get; set; }
        public int Idsubgect { get; set; }
        public int Idschool { get; set; }
        public int NamberClass { get; set; }
        public int? CountLessons { get; set; }

        public virtual School IdschoolNavigation { get; set; }
        public virtual Subject IdsubgectNavigation { get; set; }
        public virtual Teachers IdteachersNavigation { get; set; }
        public virtual ICollection<Tests> Tests { get; set; }
    }
}
