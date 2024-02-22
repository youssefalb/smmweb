import React, { useState } from 'react';
import CustomCheckbox from './atoms/CustomCheckbox';


interface BaseService {
    name: string;
    oneTimeFee: number;
    monthlyFee: number;
}

interface BooleanService extends BaseService {
    type: 'boolean';
}

interface NumericService extends BaseService {
    type: 'numeric';
    quantity: number;
}

type Service = BooleanService | NumericService;

const services: Service[] = [
    { name: 'Ilość sekcji', oneTimeFee: 100, monthlyFee: 10, type: 'numeric', quantity: 1 },
    { name: 'Płatność Elektroniczna', oneTimeFee: 100, monthlyFee: 50, type: 'boolean' },
    { name: 'Blog + Admin Panel', oneTimeFee: 100, monthlyFee: 50, type: 'boolean' },
    { name: 'Online Rezerwacja Wizyt', oneTimeFee: 100, monthlyFee: 50, type: 'boolean' },
    { name: 'Integracje API', oneTimeFee: 820, monthlyFee: 50, type: 'boolean' },
];

interface NumericValues {
    [serviceName: string]: number;
}

const WebsitePricing: React.FC = () => {
    const [selectedServices, setSelectedServices] = useState<Service[]>([]);
    const [numericValues, setNumericValues] = useState<NumericValues>({});

    const basePrice = 900; // Base price when no additional services are chosen and "Ilość sekcji" is 1

    const totalOneTimeFee = services.reduce((total, service) => {
        const additionalOneTimeFee = service.type === 'boolean' && selectedServices.includes(service) ? service.oneTimeFee : 0;
        const sectionsOneTimeFee = service.type === 'numeric' && service.name === 'Ilość sekcji' && (numericValues['Ilość sekcji'] || 1) > 1 ?
            ((numericValues['Ilość sekcji'] || 1) - 1) * service.oneTimeFee : 0;
        return total + additionalOneTimeFee + sectionsOneTimeFee;
    }, basePrice);

    const totalMonthlyFee = services.reduce((total, service) => {
        const additionalMonthlyFee = service.type === 'boolean' && selectedServices.includes(service) ? service.monthlyFee : 0;
        const sectionsMonthlyFee = service.type === 'numeric' && service.name === 'Ilość sekcji' && (numericValues['Ilość sekcji'] || 1) > 1 ?
            ((numericValues['Ilość sekcji'] || 1) - 1) * service.monthlyFee : 0;
        return total + additionalMonthlyFee + sectionsMonthlyFee;
    }, 0);

    const handleServiceChange = (service: Service) => {
        setSelectedServices(prev =>
            prev.includes(service) ? prev.filter(s => s !== service) : [...prev, service]
        );
    };

    const handleNumericChange = (serviceName: string, quantity: number) => {
        setNumericValues(prevValues => ({
            ...prevValues,
            [serviceName]: quantity
        }));
    };

    return (
        <div className="  bg-white rounded-2xl p-9 border border-gray-600">
            <h3 className="text-2xl font-bold text-gray-800 mb-3">Strona Internetowa</h3>
            <div className="flex items-baseline space-x-2 font-bold text-gray-800 mb-4">
                <div className="flex items-end space-x-4">
                    <div className="text-left">
                        <span className="text-5xl font-bold">{totalOneTimeFee}</span>
                        <span className="text-2xl">zł</span>
                        <div className="text-sm text-gray-500">JEDNORAZOWO</div>
                    </div>
                    <span className="text-4xl font-bold mb-4">+</span>
                    <div className="text-left">
                        <span className="text-5xl font-bold">{totalMonthlyFee}</span>
                        <span className="text-2xl">zł</span>
                        <div className="text-sm text-gray-500">MIESIĘCZNIE</div>
                    </div>
                </div>
            </div>

            <div className="flex flex-row">
                <div className="flex-grow py-4 space-y-2 mb-6 mt-6">
                    {services.map((service, index) => (
                        <div key={index} className="flex justify-between items-center">
                            {service.type === 'boolean' ? (
                                <label className="flex items-center">
                                    <CustomCheckbox
                                        checked={selectedServices.includes(service)}
                                        onChange={() => handleServiceChange(service)}
                                    />
                                    <span className="ml-3">{service.name}</span>
                                </label>
                            ) : (
                                // This is for numeric type services like 'Ilość sekcji'
                                <label className="flex items-center">
                                    <span className="">{service.name}</span>
                                    <input
                                        type="range"
                                        min="1"
                                        max="10"
                                        value={numericValues[service.name] || 1}
                                        onChange={(e) => handleNumericChange(service.name, Number(e.target.value))}
                                        className="form-range ml-3"
                                        step="1"
                                    />
                                    <span className="ml-3">{numericValues[service.name] || 1}</span>
                                </label>
                            )}
                        </div>
                    ))}
                </div>

                <div className="flex-none space-y-2 mb-6 bg-gray-100 p-4 rounded-lg">
                    <div className="text-sm font-bold mb-2">Cena Usługi</div>
                    {services.map((service, index) => (
                        <div key={index} className="flex justify-between">
                            <span className="text-m">{service.oneTimeFee}zł + {service.monthlyFee}zł/mc</span>
                        </div>
                    ))}
                </div>

            </div>

        </div>
    );
};

const AdditionalPricing: React.FC = () => {
    const [selectedServices, setSelectedServices] = useState<Service[]>([]);

    const totalMonthlyFee = services.reduce((total, service) => {
        const additionalMonthlyFee = selectedServices.includes(service) ? service.monthlyFee : 0;
        return total + additionalMonthlyFee;
    }, 0);

    const handleServiceChange = (service: Service) => {
        setSelectedServices(prev =>
            prev.includes(service) ? prev.filter(s => s !== service) : [...prev, service]
        );
    };

    return (
        <div className="bg-gray-900 rounded-2xl overflow-hidden">
            {/* Purple header */}
            <div className="bg-purple text-white text-lg font-bold p-3 flex justify-center items-center">
                PROMOCJA -25%
            </div>
            <div className="p-9">
                <h3 className="text-2xl font-bold text-white mb-3">Dodatkowe Usługi</h3>
                <div className="flex items-baseline space-x-2 font-bold text-white mb-4">
                    <div className="flex items-end space-x-4">
                        <div className="text-left">
                            <span className="text-5xl font-bold">{totalMonthlyFee}</span>
                            <span className="text-2xl">zł</span>
                            <div className="text-sm text-gray-500">MIESIĘCZNIE</div>
                        </div>
                    </div>
                </div>
    
                <div className="flex flex-row">
                    <div className="flex-grow py-4 space-y-2 mb-6 mt-6">
                        {services.map((service, index) => (
                            <div key={index} className="flex justify-between items-center">
                                <label className="flex items-center">
                                    <CustomCheckbox
                                        checked={selectedServices.includes(service)}
                                        onChange={() => handleServiceChange(service)}
                                    />
                                    <span className="text-gray-400 ml-3">{service.name}</span>
                                </label>
                            </div>
                        ))}
                    </div>
    
                    <div className="flex-none space-y-2 mb-6 bg-gray-800 p-4 rounded-lg">
                        <div className="text-sm text-gray-400 font-bold mb-2">Cena Usługi</div>
                        {services.map((service, index) => (
                            <div key={index} className="flex justify-between">
                                <span className="text-m text-gray-400">{service.monthlyFee}zł/mc</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
    
};

const Pricing: React.FC = () => {
    return (
        <div className=" bg-gray-100 py-10">
            <div className="text-center">
                <p className="uppercase text-sm text-gray-500 mb-2">Online Kalkulator</p>
                <h2 className="text-4xl font-bold mb-20">Sprawdź Ceny</h2>
            </div>
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-11 gap-4">
                <div className="md:col-span-6">
                    <WebsitePricing />
                </div>
                <div className="md:col-span-5">
                    <AdditionalPricing />
                </div>
            </div>
        </div>
    );
};

export default Pricing;
