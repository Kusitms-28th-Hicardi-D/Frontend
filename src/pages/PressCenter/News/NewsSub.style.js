import styled from 'styled-components';

export const ViewContainer = styled.div`
  padding-top: 3rem;
  margin: auto;
  width: 90vw;
  max-width: 800px;
`

export const Title = styled.div`
color: var(--text-text-01, #242424);
text-align: center;
margin-bottom: 1rem;

font-family: Noto Sans CJK KR;
font-size: 1.5rem;
font-weight: 700;
`

export const SubTitle = styled.div`
color: var(--text-text-03, #8B8B8B);
text-align: center;
margin-bottom: 4rem;

font-family: Noto Sans CJK KR;
font-size: 1rem;
font-weight: 700;
`

export const Label = styled.div`
color: var(--text-text-02, #555);
margin-bottom: 1rem;

font-family: Noto Sans CJK KR;
font-size: 1rem;
font-weight: 700;
`

export const Input = styled.input`
color: var(--text-text-03, #8B8B8B);
width: calc(100% - 2rem);
padding: 0.8rem 1rem;
border: none;
outline: none;
margin-bottom: 1.5rem;
border-radius: 8px;
background: var(--ui-surface-01, #F6F6F6);

font-family: Noto Sans CJK KR;
font-size: 1rem;
font-weight: 500;
`

export const SubmitBtn = styled.div`
margin-top: 1.5rem;
padding: 1rem 0rem;
align-items: center;
border: 2px solid var(--ui-primary, #19AFDD);
color: var(--ui-primary, #19AFDD);
text-align: center;
cursor: pointer;
margin-bottom: 5rem;

font-family: Noto Sans CJK KR;
font-size: 1rem;
font-style: normal;
font-weight: 700;
`