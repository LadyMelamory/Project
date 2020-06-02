using System;
using System.Collections.Generic;

namespace Project
{
    public partial class Pupils
    {
        public int Idpupil { get; set; }
        public string Name { get; set; }
        public string Surname { get; set; }
        public string Patronymic { get; set; }
        public int? Idschool { get; set; }
        public int NamberClass { get; set; }
        public string Phone { get; set; }
        public string Email { get; set; }
        public string Password { get; set; }
        public int Code { get; set; }
        public int? Idparent { get; set; }

        public virtual Parents IdparentNavigation { get; set; }
        public virtual School IdschoolNavigation { get; set; }
    }
}
