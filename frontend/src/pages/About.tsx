import { Layout } from "../components/Layout/Layout";

function About() {
  const skills = [
    "JavaScript",
    "TypeScript",
    "React",
    "Node.js",
    "AWS",
    "Docker",
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-blue-50 via-white to-purple-50 py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="w-32 h-32 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full mx-auto mb-8 flex items-center justify-center">
            <span className="text-white text-4xl font-bold">J</span>
          </div>
          <h1 className="text-5xl md:text-4xl font-bold text-gray-900 mb-6">
            About Me
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            소프트웨어 엔지니어링과 클라우드 기술에 대한 인사이트를 공유합니다.
          </p>
        </div>
      </div>

      {/* Content Section */}
      <div className="py-20 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="mb-16">
            <h2 className="text-4xl md:text-3xl font-bold text-gray-900 mb-8 text-center">
              Who Am I?
            </h2>
            <div className="prose prose-lg max-w-none text-gray-600">
              <p className="text-lg leading-relaxed text-center">
                클라우드 네이티브 애플리케이션 개발과 DevOps 실무에 대한 경험을 바탕으로, 
                현대적인 소프트웨어 개발 방법론과 기술 스택에 대한 인사이트를 공유합니다.
              </p>
            </div>
          </div>

          {/* Skills Section */}
          <div>
            <h2 className="text-4xl md:text-3xl font-bold text-gray-900 mb-8 text-center">
              Skills & Technologies
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
              {skills.map((skill) => (
                <div 
                  key={skill} 
                  className="bg-gradient-to-br from-gray-50 to-gray-100 p-6 rounded-2xl text-center hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 border border-gray-200"
                >
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl mx-auto mb-3 flex items-center justify-center">
                    <span className="text-white font-bold text-sm">{skill.charAt(0)}</span>
                  </div>
                  <span className="text-gray-800 font-medium">{skill}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Experience Section */}
          <div className="mt-20">
            <h2 className="text-4xl md:text-3xl font-bold text-gray-900 mb-8 text-center">
              Experience
            </h2>
            <div className="text-center text-gray-600">
              <p className="text-lg">향후 실제 경력 정보가 추가될 예정입니다.</p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default About;
