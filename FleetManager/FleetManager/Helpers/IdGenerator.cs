using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace FleetManager.Helpers
{
    public static class IdGenerator
    {
        private static int _currentId = 0;

        public static int NextId() =>
            Interlocked.Increment(ref _currentId);
    }
}
