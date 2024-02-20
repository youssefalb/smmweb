import React, { useState } from 'react';

// Define a type for the services
interface Service {
    name: string;
    oneTimeFee: number;
    monthlyFee: number;
}

// Sample services data
const services: Service[] = [
    { name: 'Płatność Elektroniczna', oneTimeFee: 100, monthlyFee: 50 },
    { name: 'Blog + Admin Panel', oneTimeFee: 100, monthlyFee: 50 },
    { name: 'Online Rezerwacja Wizyt', oneTimeFee: 100, monthlyFee: 50 },
    { name: 'Integracje API', oneTimeFee: 820, monthlyFee: 50 },
    // Add more services as needed
];

const Pricing: React.FC = () => {
    const [selectedServices, setSelectedServices] = useState<Service[]>([]);
    const [sectionsCount, setSectionsCount] = useState(1);

    // Calculate total fees
    const totalOneTimeFee = selectedServices.reduce((total, service) => total + service.oneTimeFee, 900); // Starting from base price
    const totalMonthlyFee = selectedServices.reduce((total, service) => total + service.monthlyFee, 0) + (sectionsCount * 50); // Add extra cost per section

    // Handle service selection
    const handleServiceChange = (service: Service) => {
        setSelectedServices(prev =>
            prev.includes(service) ? prev.filter(s => s !== service) : [...prev, service]
        );
    };

    return (
        <div className="max-w-lg mx-auto  bg-white rounded-2xl p-6 border border-gray-600">
            <h3 className="text-2xl font-bold text-gray-800 mb-3">Strona Internetowa</h3>
            <div className="flex items-baseline space-x-2 font-bold text-gray-800 mb-6">
                <div className="flex items-end space-x-4">
                    <div className="text-left">
                        <span className="text-5xl font-bold">{totalOneTimeFee}</span>
                        <span className="text-2xl">zł</span>
                        <div className="text-sm text-gray-500">JEDNORAZOWO</div>
                    </div>
                    <span className="text-3xl font-bold align-baseline">+</span>
                    <div className="text-left">
                        <span className="text-5xl font-bold">{totalMonthlyFee}</span>
                        <span className="text-2xl">zł</span>
                        <div className="text-sm text-gray-500">MIESIĘCZNIE</div>
                    </div>
                </div>
            </div>

            <div className="flex flex-row">
                <div className="flex-grow py-4 space-y-2 mb-6">
                    {services.map((service, index) => (
                        <div key={index} className="flex justify-between items-center">
                            <label className="flex items-center">
                                <input
                                    type="checkbox"
                                    className="form-checkbox rounded-full w-6 h-6 checked:bg-yellow"
                                    checked={selectedServices.includes(service)}
                                    onChange={() => handleServiceChange(service)}
                                />
                                <span className="ml-2">{service.name}</span>
                            </label>
                            {/* <div className="text-gray-600">{service.oneTimeFee}zł / {service.monthlyFee}zł</div> */}
                        </div>
                    ))}
                </div>

                <div className="flex-none space-y-2 mb-6 bg-gray-100 p-4 rounded-lg">
                    {/* <div className="text-lg font-bold mb-4">Ceny usług:</div> */}
                    {services.map((service, index) => (
                        <div key={index} className="flex justify-between">
                            <span>{service.oneTimeFee}zł / {service.monthlyFee}zł</span>
                        </div>
                    ))}
                </div>

            </div>

        </div>
    );
};

export default Pricing;
