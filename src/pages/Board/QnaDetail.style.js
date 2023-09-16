import styled from "styled-components";

export const ViewContainer = styled.div`
  padding-top: 3rem;
  margin: auto;
  width: 90vw;
  max-width: 1200px;
`;

export const TitleWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1.5rem;
`;

export const Title = styled.div`
  color: var(--text-text-01, #242424);
  font-family: Noto Sans CJK KR;
  font-size: 1.5rem;
  font-weight: 700;
`;

export const PostInfoWrapper = styled.div`
  display: flex;
  gap: 0.8rem;
  margin-bottom: 2.5rem;
`;

export const PostInfo = styled.div`
  color: var(--text-text-03, #8b8b8b);
  font-family: Noto Sans CJK KR;
  font-size: 0.8rem;
  font-weight: 500;
`;

export const QstBox = styled.div`
  padding: 2rem 1.5rem;
  margin-bottom: 2.5rem;
  border-top: 2px solid var(--gray-gray-70, #dfdfdf);
  border-bottom: 2px solid var(--gray-gray-70, #dfdfdf);
  background: var(--ui-surface-01, #f6f6f6);

  color: var(--text-text-01, #242424);
  font-family: Noto Sans CJK KR;
  font-size: 1rem;
  font-weight: 500;
`;

export const AnsTitle = styled.div`
  color: var(--text-text-02, #555);
  font-family: Noto Sans CJK KR;
  font-size: 1rem;
  font-weight: 500;
`;

export const AnsBox = styled(QstBox)`
  border-radius: 8px;
  background: var(--ui-surface-04, #e8f7fc);
  border: none;
`;
