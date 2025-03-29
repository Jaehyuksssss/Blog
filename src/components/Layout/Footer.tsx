import styled from "styled-components";
import { Link } from "react-router-dom";

const FooterContainer = styled.footer`
  background-color: ${({ theme }) => theme.colors.monochrome[100]};
  padding: ${({ theme }) => theme.spacing.xl} 0;
  margin-top: auto;
`;

const FooterContent = styled.div`
  max-width: ${({ theme }) => theme.breakpoints.xl};
  margin: 0 auto;
  padding: 0 ${({ theme }) => theme.spacing.md};
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: ${({ theme }) => theme.spacing.xl};
`;

const FooterSection = styled.div`
  h3 {
    font-size: 1.1rem;
    font-weight: 600;
    margin-bottom: ${({ theme }) => theme.spacing.md};
    color: ${({ theme }) => theme.colors.monochrome[800]};
  }

  ul {
    list-style: none;
    padding: 0;
    margin: 0;
  }

  li {
    margin-bottom: ${({ theme }) => theme.spacing.sm};
  }

  a {
    color: ${({ theme }) => theme.colors.monochrome[600]};
    text-decoration: none;
    transition: color 0.2s;

    &:hover {
      color: ${({ theme }) => theme.colors.primary};
    }
  }
`;

const Copyright = styled.div`
  text-align: center;
  margin-top: ${({ theme }) => theme.spacing.xl};
  padding-top: ${({ theme }) => theme.spacing.md};
  border-top: 1px solid ${({ theme }) => theme.colors.monochrome[200]};
  color: ${({ theme }) => theme.colors.monochrome[600]};
`;

const SocialLinks = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing.md};
  margin-top: ${({ theme }) => theme.spacing.md};

  a {
    color: ${({ theme }) => theme.colors.monochrome[600]};
    font-size: 1.5rem;
    transition: color 0.2s;

    &:hover {
      color: ${({ theme }) => theme.colors.primary};
    }
  }
`;

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <FooterContainer>
      <FooterContent>
        <FooterSection>
          <h3>About</h3>
          <p>
            클라우드, 웹 개발, 그리고 소프트웨어 엔지니어링에 대한 이야기를
            공유합니다.
          </p>
          <SocialLinks>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
            >
              <i className="fab fa-github"></i>
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <i className="fab fa-linkedin"></i>
            </a>
          </SocialLinks>
        </FooterSection>

        <FooterSection>
          <h3>Categories</h3>
          <ul>
            <li>
              <Link to="/blog?category=web">Web Development</Link>
            </li>
            <li>
              <Link to="/blog?category=cloud">Cloud Computing</Link>
            </li>
            <li>
              <Link to="/blog?category=devops">DevOps</Link>
            </li>
            <li>
              <Link to="/blog?category=programming">Programming</Link>
            </li>
          </ul>
        </FooterSection>

        <FooterSection>
          <h3>Quick Links</h3>
          <ul>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/blog">Blog</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
            <li>
              <Link to="/privacy">Privacy Policy</Link>
            </li>
          </ul>
        </FooterSection>

        <FooterSection>
          <h3>Newsletter</h3>
          <p>최신 포스트 업데이트 소식을 받아보세요.</p>
          <form
            onSubmit={(e) => {
              e.preventDefault();
            }}
          >
            <input
              type="email"
              placeholder="이메일을 입력하세요"
              style={{
                width: "100%",
                padding: "0.5rem",
                marginTop: "0.5rem",
                border: "1px solid #ddd",
                borderRadius: "4px",
              }}
            />
          </form>
        </FooterSection>
      </FooterContent>

      <Copyright>
        <p>&copy; {currentYear} My Tech Blog. All rights reserved.</p>
      </Copyright>
    </FooterContainer>
  );
}

export default Footer;
