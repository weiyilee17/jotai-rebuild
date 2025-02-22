import { atom, useAtom, useAtomValue } from './jotai';

const salaryAtom = atom(100_000);
const bonusAtom = atom(10_000);
const totalSalaryAtom = atom((get) => get(salaryAtom) + get(bonusAtom));
const JSONAtom = atom(() => fetch('/data.json').then((res) => res.json()));
const JSONKeysAtom = atom((get) => Object.keys(get(JSONAtom) ?? {}));

function SalaryDisplay() {
  const salary = useAtomValue<number>(salaryAtom);
  return <div>{salary}</div>;
}

function App() {
  const [salary, setSalary] = useAtom<number>(salaryAtom);
  const [bonus, setBonus] = useAtom<number>(bonusAtom);
  const totalSalary = useAtomValue<number>(totalSalaryAtom);
  // TODO: fix the type
  const testJSON = useAtomValue<object>(JSONAtom);
  const keysJSON = useAtomValue(JSONKeysAtom);

  return (
    <>
      <div>
        <label htmlFor='salary'>Salary</label>
        <input
          type='number'
          id='salary'
          value={salary}
          onChange={(e) => setSalary(+e.target.value)}
        />
      </div>
      <div>{salary}</div>

      <SalaryDisplay />

      <div>
        <label htmlFor='bonus'>Bonus</label>
        <input
          type='number'
          id='bonus'
          value={bonus}
          onChange={(e) => setBonus(+e.target.value)}
        />
      </div>
      <div>{bonus}</div>

      <div>Total:</div>
      <div>{totalSalary}</div>
      <div>Test JSON:</div>
      <div>{JSON.stringify(testJSON)}</div>
      <div>Keys:</div>
      <div>{JSON.stringify(keysJSON)}</div>
    </>
  );
}

export default App;
