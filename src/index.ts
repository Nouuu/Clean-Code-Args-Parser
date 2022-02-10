// Schema explanations:
// -> char     - Boolean arg
// -> char#    - Number arg
// -> char*    - String arg

import { Args } from './Args';

const schema = 'd,p#,h*';

const executeApplication = (d: boolean, p: number, h: string) => {
  console.log(
    `Application running - detached (${d}), port: (${p}), hero is (${h})`
  );
};

try {
  const args = new Args(schema);
  args.parse(`-d -p 42 -h 'Vincent Vega'`);

  const detach = args.getBoolean('d');
  const port = args.getNumber('p');
  const hero = args.getString('h');
  executeApplication(detach, port, hero);
} catch (e: any) {
  console.error(`Parse error: ${e.message}`);
}
