import { atom, useAtom } from './jotai';

const salaryAtom = atom<number>(100_000);

function SalaryDisplay() {
  const [salary] = useAtom<number>(salaryAtom);
  return <div>{salary}</div>;
}

function App() {
  const [salary, setSalary] = useAtom<number>(salaryAtom);

  return (
    <>
      <div>
        <label htmlFor='salary'>Salary </label>
        <input
          type='number'
          id='salary'
          value={salary}
          onChange={(e) => setSalary(+e.target.value)}
        />
      </div>
      <div>{salary}</div>
      <SalaryDisplay />
    </>
  );
}

export default App;
