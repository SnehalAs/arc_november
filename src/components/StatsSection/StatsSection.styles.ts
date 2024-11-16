import styled from "styled-components";

export const Section = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 3rem 5rem;
  background-color: #ffffff;
  border: 2px solid #e0e0e0;
  border-radius: 10px;
  margin: 2rem 0;

  @media (max-width: 768px) {
    flex-direction: column;
    padding: 2rem;
  }
`;

export const Content = styled.div`
  max-width: 50%;

  @media (max-width: 768px) {
    max-width: 100%;
    text-align: center;
  }
`;

export const Title = styled.h1`
  font-size: 2.5rem;
  color: #2d3e50;
  margin-bottom: 1rem;

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

export const Subtitle = styled.p`
  font-size: 1rem;
  color: #637381;
  margin-bottom: 2rem;
  line-height: 1.5;

  @media (max-width: 768px) {
    font-size: 0.9rem;
  }
`;

export const StatsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 2rem;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    gap: 1.5rem;
  }
`;

export const StatBox = styled.div`
  text-align: center;
`;

export const StatNumber = styled.h2`
  font-size: 2rem;
  color: #5c67f2;
  margin-bottom: 0.5rem;

  @media (max-width: 768px) {
    font-size: 1.8rem;
  }
`;

export const StatLabel = styled.p`
  font-size: 1rem;
  color: #637381;
`;

export const MediaContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;

  span {
    font-size: 1rem;
    color: #637381;
    margin-right: 1rem;
  }

  @media (max-width: 768px) {
    justify-content: center;
  }
`;

export const MediaItem = styled.img`
  height: 30px;
  object-fit: contain;

  @media (max-width: 768px) {
    height: 25px;
  }
`;

export const GlobeImage = styled.img`
  max-width: 40%;
  height: auto;

  @media (max-width: 768px) {
    max-width: 70%;
    margin-top: 2rem;
  }
`;
