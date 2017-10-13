// Should be made general, but quick 'n' dirty for now.
module.exports.controller = function substitute(string, value, search_string = "${MODEL}") {
  string = string.replace(/\$\{MODEL\}/g, value);
  string = string.replace(/\$\{model\}/g, value.toLowerCase());
  return string;
}

module.exports.model = function substitute(string, value) {
  return string.replace(/\$\{CLASS\}/g, value);
}

module.exports.view = module.exports.controller;
