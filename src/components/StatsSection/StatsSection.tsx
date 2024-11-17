import React from "react";
import {
  Section,
  Content,
  Title,
  Subtitle,
  StatsContainer,
  StatBox,
  StatNumber,
  StatLabel,
  MediaContainer,
  MediaItem,
  GlobeImage,
} from "./StatsSection.styles";
import Globe from "./globe.png"; 


import DailyhuntLogo from "../../assets/Dailyhunt.png";
import TOILogo from "../../assets/TOI.png";
import HindustanLogo from "../../assets/times.png";

const StatsSection: React.FC = () => {
  return (
    <Section>
      <Content>
        <Title>Unleash the full power of data</Title>
        <Subtitle>
          We guide global businesses through the challenges of developing purposeful technology that addresses their needs and advances their growth. We have established offices in India, the UAE, and the USA.
        </Subtitle>
        <StatsContainer>
          <StatBox>
            <StatNumber>40+</StatNumber>
            <StatLabel>Integrations</StatLabel>
          </StatBox>
          <StatBox>
            <StatNumber>600%</StatNumber>
            <StatLabel>Return on Investment</StatLabel>
          </StatBox>
          <StatBox>
            <StatNumber>4k+</StatNumber>
            <StatLabel>Global customers</StatLabel>
          </StatBox>
        </StatsContainer>
        <MediaContainer>
          <span>Featured in</span>
          <MediaItem src={DailyhuntLogo} alt="Dailyhunt" />
          <MediaItem src={TOILogo} alt="TOI" />
          <MediaItem src={HindustanLogo} alt="Hindustan Times" />
        </MediaContainer>
      </Content>
      <GlobeImage src={Globe} alt="Global presence" />
    </Section>
  );
};

export default StatsSection;

