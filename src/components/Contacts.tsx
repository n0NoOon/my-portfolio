export default function Contacts() {
  return (
    <div id="contact" className="flex flex-col gap-3">
      <div className="flex justify-center font-bold">
        <h1 className="border-b-2">Contacts</h1>
      </div>
      <div className="flex flex-col">
        <div className="flex gap-3 justify-center">
          <h2>Email:</h2>
          <p>
            <a href="mailto:sitthipat.w@gmail.com">sitthipat.w@gmail.com</a>
          </p>
        </div>
        <div className="flex gap-3 justify-center">
          <h2>Tel:</h2>
          <p>092-345-2422</p>
        </div>
        <div className="flex gap-3 justify-center">
          <h2>Resume:</h2>
          <a href="/file/Sitthipat_Resume_2025_06.pdf" download={true}>
            <p>Click here!</p>
          </a>
        </div>
      </div>
    </div>
  );
}
