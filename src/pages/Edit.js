import { useNavigate, useSearchParams } from "react-router-dom";

const Edit = () => {
  const navigat = useNavigate();

  const [searchParams, setSearchParams] = useSearchParams();

  const id = searchParams.get("id");
  console.log("id: ", id);

  const mode = searchParams.get("mode");
  console.log("mode: ", mode);

  return (
    <div>
      {" "}
      <h1>Edit</h1>
      <p>이곳은 일기 수정 입니다</p>
      <button onClick={() => setSearchParams({ who: "moca" })}> QS </button>
      <button
        onClick={() => {
          navigat("/home");
        }}
      >
        HOME으로 가기
      </button>
      <button
        onClick={() => {
          navigat(-1);
        }}
      >
        뒤로 가기
      </button>
    </div>
  );
};

export default Edit;
