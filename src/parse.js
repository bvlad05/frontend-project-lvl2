import yaml from 'js-yaml';
import ini from 'ini';

const parsers = {
  json: JSON.parse,
  yaml: yaml.load,
  ini: ini.parse,
};

export default (extension, content) => parsers[extension](content);
