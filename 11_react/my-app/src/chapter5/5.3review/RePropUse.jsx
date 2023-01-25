import ReFooter from "./ReFooter";
import ReHeader from "./ReHeader";
import ReLayout from "./ReLayout";
import ReProfile from "./ReProfile";

function RePropUse(props) {
  return (
    <>
      <ReProfile 
        name = "이회은"
        introduction="안녕하세요. 이회은입니다."
        viewCount= {2000}
      />

      <ReLayout 
        width = {2560}
        height = {1440}
        header = {
          <ReHeader title="이회은 블로그 입니다."/>
        }
        footer={
          <ReFooter />
        }
      />
    </>
  ); 
}

export default RePropUse;