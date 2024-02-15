import React from 'react';

const CooperationPlan = () => {
    return (
        <div className=" bg-gray-100 py-10">
            <div className="text-center">
                <h2 className="text-4xl font-semibold mb-6">Plan Współpracy</h2>
                <p className="uppercase text-sm text-gray-500 mb-10">Przebieg pracy</p>
            </div>
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                <div className="flex flex-col items-center text-center">
                    <div className="mb-4">
                        <img src="/messageicon.png" alt="Wywiad" className="h-12 w-12" />
                    </div>
                    <h3 className="text-lg font-semibold mb-2">Wywiad</h3>
                    <p className="text-gray-600">
                        Przeprowadzamy wywiad, aby dobrze poznać Twoje potrzeby oraz ustalić priorytety.
                    </p>
                </div>
                <div className="flex flex-col items-center text-center">
                    <div className="mb-4">
                        <img src="/bookicon.png" alt="Projekt" className="h-12 w-12" />
                    </div>
                    <h3 className="text-lg font-semibold mb-2">Projekt</h3>
                    <p className="text-gray-600">
                        Na podstawie zebranych wytycznych tworzymy projekt graficzny Twojej strony internetowej.
                    </p>
                </div>
                <div className="flex flex-col items-center text-center">
                    <div className="mb-4">
                        <img src="/shareicon.png" alt="Wykonanie" className="h-12 w-12" />
                    </div>
                    <h3 className="text-lg font-semibold mb-2">Wykonanie</h3>
                    <p className="text-gray-600">
                        Nasi webmasterzy łączą grafikę i treści w całość oraz dbają, by strona wyświetlała się dobrze na każdym urządzeniu.
                    </p>
                </div>
                <div className="flex flex-col items-center text-center">
                    <div className="mb-4">
                        <img src="/messageicon2.png" alt="Akceptacja i Wdrożenie" className="h-12 w-12" />
                    </div>
                    <h3 className="text-lg font-semibold mb-2">Akceptacja i Wdrożenie</h3>
                    <p className="text-gray-600">
                        Jeszcze przed publikacją strony w sieci przekazujemy Ci ostateczny projekt do wglądu i akceptacji.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default CooperationPlan;
