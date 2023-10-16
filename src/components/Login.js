import styled from 'styled-components';

const Login = ()=> {
       return(
       <Container>
        <Content>
            <CTA>
                <CTALogoOne src="/images/cta-logo-one.svg" alt=""/>
                <SignUp>GET ALL THERE</SignUp>
                <Description>Get Premier Access to Raya and the last Dragon fro an additional fee with a Disney+ subscription. As of 03/26/2024, the price of Disnep+ and The Disney Bundle will increase by $1</Description>
                <CTALogoTwo src="/images/cta-logo-two.png" alt="lg2"></CTALogoTwo>
            </CTA>
            <BgImg/>
        </Content>
       </Container>
       )
};

const Container = styled.section`
overflow:hidden;
display:flex;
flex-direction:column;
text-align:center;
height:100vh;
`;

const Content = styled.div`
margin-bottom:10vw;
width:100%;
position:relative;
min-height:100vh;
box-sizing:border-box;
display:flex;
justify-content:center;
align-items:center;
flex-direction:column;
padding:80px 40px;
height:100%;
`;

const BgImg = styled.div `
height:100%;
background-postion:top;
background-size:cover;
background-repeat: no-repeat;
background-image:url("./images/login-background.jpg");
position:absolute;
top:0;
right:0;
left:0;
z-index:-1;
`;

const CTA = styled.div `
margin-bottom:2vw;
max-width:650px;
flex-wrap:wrap;
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
text-align:center;
margin-right:auto;
margin-left:auto;
transition-timing-function:ease-out;
transition:opactity 0.2s;
width:100%;
`;

const CTALogoOne = styled.img `
margin-bottom:12px;
max-width:600px;
min-height:1px;
display:block;
width:100%;
`;

const SignUp = styled.a `
font-weight:bold;
color:#f9f9f9;
background-color:#0063e5;
margin-bottom:12px;
width:100%;
letter-spacing:1.5px;
font-size:18px;
padding: 16.5px 0;
border: 1px solid transparent;
border-radius: 4px;

&:hover {
    background-color: #0483ee;
}
`;

const Description = styled.p `
color:hsla (0.0%, 95.3%, 1);
font-size: 11px;
margin: 0 0 2px;
line-height: 1.5em;
letter-spacing: 1.5px;
`;

const CTALogoTwo = styled.img `
max-width:600px;
margin-top: 10px;
margin-bottom: 20px;
width:100%;
`

export default Login;