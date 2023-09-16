import * as S from "./NoticeDetail.style";
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';

export default function NoticeDetail () {
    const { noticeId } = useParams();
    const [data, setData] = useState({})
    
    // 데이터 불러오기
    const fetchData = async () => {
      await axios
        .get(`http://15.164.149.157/api/board/notice/${noticeId}`)
        .then((res) => {
          console.log(res);
          setData({...res.data.result})
        })
        .catch((err) => {
          console.error(err);
        });
    };
  
    useEffect(() => {
      fetchData();
    }, []);
  
    return (
      <S.ViewContainer>
        <S.Title>{data.title}</S.Title>
        <S.PostInfoWrapper>
          <S.PostInfo>{data.writer}</S.PostInfo>
          <S.Slash />
          <S.PostInfo>{data.date}</S.PostInfo>
        </S.PostInfoWrapper>
        <S.Contents>{data.content}</S.Contents>
        <S.AttachTitle>첨부파일 2개</S.AttachTitle>
        <S.AttatchButton>파일명</S.AttatchButton>
        <S.AttatchButton>파일명</S.AttatchButton>
      </S.ViewContainer>
    );
}