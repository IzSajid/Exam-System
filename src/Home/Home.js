import React from 'react';

const Home = () => {
    return (
        <div>



    {/* <!-- Hero Section --> */}
    <section class="bg-cover bg-top  h-auto text-white py-24 px-10 object-fill">
        <div class="container mx-auto text-center">
            <h2 class="text-4xl font-bold mb-4">An Online Examination System For Easy And Secure Online Exams</h2>
            <p class="text-lg text-black-700">Access your exams on any device, anywhere anytime</p>
            <p class="text-lg text-black-700">AI-Powered prevent cheating technology</p>
            <p class="text-lg text-black-700">Automate grading & insightful reports</p>
        </div>
    </section>

    {/* <!-- Features Section --> */}

    <section class="bg-white py-16">
        <div class="container mx-auto text-center">
            <h2 class="text-2xl font-bold mb-6">Our Features</h2>
            <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div class="p-4 border rounded-md">
                    <h3 class="text-xl font-semibold mb-2"><i class="fas fa-pencil-alt"></i> Quiz Maker</h3>
                    <p class="text-gray-600">Quickly create online quizzes and easily organize tests. Save time and
                        effort in grading using our automated grading quiz software</p>
                </div>
                <div class="p-4 border rounded-md">
                    <h3 class="text-xl font-semibold mb-2"><i class="fas fa-eye"></i> Online Proctoring Software</h3>
                    <p class="text-gray-600">Webcam proctoring software to help exam organizers assess candidates.</p>
                </div>
                <div class="p-4 border rounded-md">
                    <h3 class="text-xl font-semibold mb-2"><i class="fas fa-poll"></i> Assessment Software</h3>
                    <p class="text-gray-600">Create & share online assessments to measure knowledge and performance of
                        students.</p>
                </div>
                <div class="p-4 border rounded-md">
                    <h3 class="text-xl font-semibold mb-2"><i class="fas fa-universal-access"></i> Share and Access
                        Anytime & Anywhere</h3>
                    <p class="text-gray-600">Our responsive assessment interface enables the candidates to take the
                        assessment online on any device, no matter mobile phone, tablet, or computer.</p>
                </div>
                <div class="p-4 border rounded-md">
                    <h3 class="text-xl font-semibold mb-2"><i class="fas fa-check"></i> Auto-score Results</h3>
                    <p class="text-gray-600">Our advanced intelligent software can automatically score and generate
                        detailed data reports, allowing you to easily and clearly track the performance and progress of
                        your candidates.</p>
                </div>
            </div>
        </div>
    </section>
        </div>
    );
};

export default Home;