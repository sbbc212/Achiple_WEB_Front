/* eslint-disable @typescript-eslint/ban-types */
function FindInput({ name, classData, setName, stateName, type }: { name: string; classData: string; setName: Function; stateName: string; type?: string }) {
  const inputHandler = (e: { target: { value: string } }) => {
    setName(e.target.value);
  };

  return (
    <form onSubmit={(e) => e.preventDefault()} className={`${classData} findinput `}>
      <label htmlFor={classData}>{name}</label>
      <input onChange={inputHandler} type={type ? type : "text"} id={classData} name={stateName} autoComplete={`new-${classData}`} />
    </form>
  );
}

export default FindInput;
