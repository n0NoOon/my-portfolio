export default function Contacts() {
  return (
    <div>
      <div className="flex justify-center">
        <h1>Contacts</h1>
      </div>
      <div className="">
        <div className="flex gap-3">
          <h2>Email:</h2>
          <p>sitthipat.w@gmail.com</p>
        </div>
        <div className="flex gap-3">
          <h2>Tel:</h2>
          <p>092-345-2422</p>
        </div>
        <div className="flex gap-3">
          <h2>Resume:</h2>
          <a href="" target="_blank">
            <p>Click here!</p>
          </a>
        </div>
      </div>
    </div>
  );
}
