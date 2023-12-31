import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Grid, Box, Button } from '@mui/material';
import styled from 'styled-components';
import Students from "../assets/students.svg";
import { LightPurpleButton } from '../components/buttonStyles';
import students2 from "../pages/student.jpeg"
import students5 from "../pages/student5.jpg"

const Homepage = () => {
    return (
        <StyledContainer>
            <Grid container spacing={0}>
                <Grid item xs={12} md={6}>
                    <img src={students5} alt="students5" style={{ width: '100%' }} />
                </Grid>
                <Grid item xs={12} md={6}>
                    <StyledPaper elevation={3}>
                        <StyledTitle>
                            Welcome to
                            <br />
                              Language Learning
                            <br />
                            System
                        </StyledTitle>
                        <StyledText>
                        People learn a new language for all sorts of reasons to work or study in another country, move abroad, or simply for pleasure. No matter the motivation, many students find that the experience of studying a new language enriches their lives.
                        </StyledText>
                        <StyledBox>
                            <StyledLink to="/choose">
                                <LightPurpleButton variant="contained" fullWidth>
                                    Login
                                </LightPurpleButton>
                            </StyledLink>
                            
                            <StyledText>
                                Don't have an account?{' '}
                                <Link to="/Adminregister" style={{color:"#550080"}}>
                                    Sign up
                                </Link>
                            </StyledText>
                        </StyledBox>
                    </StyledPaper>
                </Grid>
            </Grid>
        </StyledContainer>
    );
};

export default Homepage;



const StyledContainer = styled(Container)`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const StyledPaper = styled.div`
  padding: 24px;
  height: 100vh;
  background-color: #f4f4f4;
`;

const StyledBox = styled(Box)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 16px;
  padding: 24px;
  background-color: #ffffff;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const StyledTitle = styled.h1`
  font-size: 2.5rem;
  color: #333333;
  font-family: "Manrope", sans-serif;
  font-weight: bold;
  padding-top: 0;
  letter-spacing: 1px;
  line-height: 1.2;
  margin-bottom: 10px;
`;

const StyledText = styled.p`
  color: #666666;
  margin-top: 20px;
  margin-bottom: 20px;
  letter-spacing: 0.5px;
  line-height: 1.5;
`;

const StyledLink = styled(Link)`
  color: #007bff;
  text-decoration: none;
  &:hover {
    color: #0056b3;
  }
`;
