const heredoc = require('heredoc');
module.exports.model = heredoc.strip(() => { /*
  using System;
  using System.Collections.Generic;
  using System.Linq;
  using System.Threading.Tasks;
  namespace App.Models
  {
    public class ${CLASS}
    {
    }
  }
*/ });
