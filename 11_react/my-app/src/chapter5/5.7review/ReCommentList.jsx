import ReComment from "../5.7review/ReComment";

const comments = [
  {
    name: '이회은',
    comment: '저 합격인가요?',
    date: '2023.01.25',
  },
  {
    name: '면접관',
    comment: '네, 합격입니다. 다음주 월요일부터 출근하세요!',
    date: '2023.01.25',
  },
  {
    name: '이회은',
    comment: '네, 확인 감사합니다. 다음주 월요일에 뵙겠습니다.',
    date: '2023.01.25',
  },
  
];



function ReCommentList(props) {
  return (
    <div>
      {/* {[
      <ReComment name = {'이회은'} comment = {'안녕하세요, 이회은입니다.'} date = {'2023.01.19'}/>,
      <ReComment name = {'면접관'} comment = {'1분 본인 PR해보시죠'} date = {'2023.01.19'}/>,
      <ReComment name = {'이회은'} comment = {'저는 합격될 상입니다!'} date = {'2023.01.19'}/>,
      ]} */}

      {comments.map((comments, index) => {
        console.log(index);
        // console.log(comments[0]);
        // console.log(comments.name);
        // console.log(comments.comment);
        // console.log(comments.date);
        return (
          <ReComment 
            key = {index}
            name = {comments.name}
            comment = {comments.comment}
            date = {comments.date}
          />
        );
      })}
    </div>
  );
}

export default ReCommentList;