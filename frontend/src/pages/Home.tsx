import { Link } from "react-router-dom";
import { Layout } from "../components/Layout/Layout";

function Home() {
  return (
    <Layout>
      {/* Hero Section */}
      <div className="relative bg-gradient-to-br from-blue-50 via-white to-purple-50 py-20 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-7xl md:text-6xl sm:text-5xl font-bold bg-gradient-to-r from-gray-900 via-blue-800 to-purple-800 bg-clip-text text-transparent mb-6 leading-tight">
            Tech Blog
          </h1>
          <p className="text-xl md:text-lg text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
           
          </p>
          <Link 
            to="/blog" 
            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-full shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 text-lg"
          >
            블로그 보러가기
            <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </Link>
        </div>
      </div>

      {/* Featured Posts Section */}
      <div className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-3xl font-bold text-gray-900 mb-4">
              Featured Articles
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              가장 인기 있는 기술 포스트들을 확인해보세요
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Featured Post Card 1 */}
            <div className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden border border-gray-100">
              <div className="h-48 bg-gradient-to-br from-blue-400 to-purple-500"></div>
              <div className="p-6">
                <div className="flex items-center mb-3">
                  <span className="px-3 py-1 bg-blue-100 text-blue-800 text-sm font-medium rounded-full">Cloud</span>
                  <span className="ml-2 text-sm text-gray-500">5 min read</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                  AWS CloudFront + S3 정적 웹사이트 배포
                </h3>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  CloudFront와 S3를 활용한 정적 웹사이트 배포 전략과 무효화까지 모든 과정을 다룹니다.
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full"></div>
                    <span className="ml-2 text-sm text-gray-700">Jaehyuk Lim</span>
                  </div>
                  <span className="text-sm text-gray-500">2025-03-30</span>
                </div>
              </div>
            </div>

            {/* Featured Post Card 2 */}
            <div className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden border border-gray-100">
              <div className="h-48 bg-gradient-to-br from-green-400 to-blue-500"></div>
              <div className="p-6">
                <div className="flex items-center mb-3">
                  <span className="px-3 py-1 bg-green-100 text-green-800 text-sm font-medium rounded-full">React</span>
                  <span className="ml-2 text-sm text-gray-500">7 min read</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-green-600 transition-colors">
                  React 프로젝트 구조 설계
                </h3>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  컴포넌트 구조, 훅 관리, 타입 분리 등 유지보수가 쉬운 React 프로젝트 구조를 소개합니다.
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <div className="w-8 h-8 bg-gradient-to-r from-green-500 to-blue-600 rounded-full"></div>
                    <span className="ml-2 text-sm text-gray-700">Jaehyuk Lim</span>
                  </div>
                  <span className="text-sm text-gray-500">2025-03-28</span>
                </div>
              </div>
            </div>

            {/* Featured Post Card 3 */}
            <div className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden border border-gray-100">
              <div className="h-48 bg-gradient-to-br from-purple-400 to-pink-500"></div>
              <div className="p-6">
                <div className="flex items-center mb-3">
                  <span className="px-3 py-1 bg-purple-100 text-purple-800 text-sm font-medium rounded-full">DevOps</span>
                  <span className="ml-2 text-sm text-gray-500">6 min read</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-purple-600 transition-colors">
                  GitHub Actions로 CI/CD 파이프라인 구축
                </h3>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  React + S3 + CloudFront 환경에서 GitHub Actions로 배포 자동화를 구성하는 방법을 소개합니다.
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-600 rounded-full"></div>
                    <span className="ml-2 text-sm text-gray-700">Jaehyuk Lim</span>
                  </div>
                  <span className="text-sm text-gray-500">2025-03-25</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Newsletter Section */}
      <div className="py-20 px-4 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-3xl font-bold text-white mb-4">
            최신 포스트 업데이트 받아보기
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            새로운 기술 포스트와 개발 팁을 이메일로 받아보세요
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="이메일을 입력하세요"
              className="flex-1 px-6 py-4 rounded-full border-0 focus:ring-4 focus:ring-white/20 focus:outline-none text-gray-900"
            />
            <button className="px-8 py-4 bg-white text-blue-600 font-semibold rounded-full hover:bg-gray-100 transition-colors shadow-lg">
              구독하기
            </button>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Home;
