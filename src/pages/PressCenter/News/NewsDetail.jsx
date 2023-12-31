import * as S from "./NewsDetail.style";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

export default function NewsDetail() {
  const { newsId } = useParams();
  const [data, setData] = useState({});

  // 데이터 불러오기
  const fetchData = async () => {
    await axios
      .get(`https://devmincho.site/api/presscenter/news/${newsId}`)
      .then((res) => {
        console.log(res);
        setData({ ...res.data.result });
      })
      .catch((err) => {
        console.error(err);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  // 외부 링크를 새 탭으로 열기
  const onClickItem = async (event) => {
    const idx = event.target.id;
    // await axios
    //   .get(`https://devmincho.site/api/presscenter/news/file`, {
    //     headers: {
    //       "Content-Type": "application/octet-stream",
    //     },
    //     params: {
    //       key: data.files[idx]?.url,
    //       downloadFileName: data.files[idx]?.name,
    //     },
    //   })
    //   .then((res) => {
    //     console.log(res);
    //   })
    //   .catch((err) => {
    //     console.error(err);
    //   });
    window.open(
      `https://devmincho.site/api/presscenter/news/file?key=${data.files[idx]?.url}&downloadFileName=${data.files[idx]?.name}.pdf`,
      "_blank"
    );
  };

  return (
    <S.ViewContainer>
      <S.Title>{data.title}</S.Title>
      <S.PostInfoWrapper>
        <S.PostInfo>{data.writer}</S.PostInfo>
        <S.Slash />
        <S.PostInfo>{data.createdDate}</S.PostInfo>
      </S.PostInfoWrapper>
      <S.Contents>{data.content}</S.Contents>
      <S.AttachTitle>
        첨부파일 {data.files?.length === 0 ? "0" : data.files?.length}개
      </S.AttachTitle>
      <S.AttachButtonWrapper>
        {data.files?.map((el, idx) => (
          <S.AttatchButton id={idx} onClick={onClickItem}>
            {el.name}
          </S.AttatchButton>
        ))}
      </S.AttachButtonWrapper>
    </S.ViewContainer>
  );
}
