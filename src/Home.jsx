import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  function handleClick() {
    navigate("/contact");
  }

  return (
    <>
      <h1>Home Page</h1>
      <p>It helps the designer plan where the content will sit. It helps in creating drafts of the content on the pages of the website. It originates from the Latin text but is seen as gibberish.
  Sometimes, the reader gets distracted while creating or working on the website. That’s why this language is important.
  This tool makes the work easier for the webmaster.</p>
  <input type="button" name="redirectbtn" value ="Go to contact" onClick={handleClick} />
    </>
  );
}

export default Home;
