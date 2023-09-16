import styled from "styled-components";

export const ViewContainer = styled.div`
  padding-top: 3rem;
  margin: auto;
  width: 90vw;
  max-width: 1200px;
`;

export const Title = styled.div`
  color: var(--text-text-01, #242424);
  font-family: Noto Sans CJK KR;
  font-size: 1.5rem;
  font-weight: 700;
  margin-bottom: 1rem;
`;

export const PostInfoWrapper = styled.div`
  display: flex;
  gap: 0.8rem;
  margin-bottom: 2.5rem;
`;

export const PostInfo = styled.div`
  color: var(--text-text-03, #8b8b8b);
  font-family: Noto Sans CJK KR;
  font-size: 0.6rem;
  font-weight: 500;
`;

export const Slash = styled.div`
  height: 0.6rem;
  width: 1px;
  background-color: #8b8b8b;
`

export const Contents = styled.div`
  padding: 1.5rem 1rem;
  margin-bottom: 2.5rem;
  border-top: 2px solid var(--gray-gray-70, #dfdfdf);
  border-bottom: 2px solid var(--gray-gray-70, #dfdfdf);
  background: var(--ui-surface-01, #f6f6f6);

  min-height: 300px;
  color: var(--text-text-01, #242424);
  font-family: Noto Sans CJK KR;
  font-size: 1rem;
  font-weight: 500;
`;

export const AttachTitle = styled.div`
  color: var(--text-text-02, #555);
  font-family: Noto Sans CJK KR;
  font-size: 1rem;
  font-weight: 500;

  margin-bottom: 1rem;
`;

export const AttachButtonWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
  margin-bottom: 7rem;
`

export const AttatchButton = styled.div`
  padding: 0.5rem 1rem;
  background: var(--ui-surface, #fff);
  box-shadow: 0px 0px 5px 0px rgba(0, 51, 150, 0.25);
  margin-bottom: 0.8rem;
  cursor: pointer;

  color: var(--Black, #000);
  font-family: Noto Sans CJK KR;
  font-size: 1rem;
  font-weight: 700;
`;
