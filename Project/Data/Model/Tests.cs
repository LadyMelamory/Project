using System;
using System.Collections.Generic;

namespace Project
{
    public partial class Tests
    {
        public int TestId { get; set; }
        public string Name { get; set; }
        public int? Idcourse { get; set; }

        public virtual Courses IdcourseNavigation { get; set; }
    }
}
