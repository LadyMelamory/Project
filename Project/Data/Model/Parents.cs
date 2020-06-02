using System;
using System.Collections.Generic;

namespace Project
{
    public partial class Parents
    {
        public Parents()
        {
            Pupils = new HashSet<Pupils>();
        }

        public int Idparent { get; set; }
        public string NameMather { get; set; }
        public string NameFather { get; set; }
        public string SurnameMather { get; set; }
        public string SurnameFather { get; set; }
        public string PatronymicMather { get; set; }
        public string PatronymicFather { get; set; }
        public string PhoneMathe { get; set; }
        public string Email { get; set; }
        public string Password { get; set; }
        public string PhoneFather { get; set; }

        public virtual ICollection<Pupils> Pupils { get; set; }
    }
}
