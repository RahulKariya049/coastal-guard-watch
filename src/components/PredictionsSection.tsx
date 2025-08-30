import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import mapImage from '@/assets/india-coastal-map.png';

const coastalStates = [
  'Gujarat', 'Maharashtra', 'Goa', 'Karnataka', 'Kerala',
  'Tamil Nadu', 'Andhra Pradesh', 'Odisha', 'West Bengal'
];

const citiesByState: { [key: string]: string[] } = {
  'Gujarat': ['Dwarka', 'Porbandar', 'Veraval', 'Surat'],
  'Maharashtra': ['Mumbai', 'Ratnagiri', 'Alibaug'],
  'Goa': ['Panaji', 'Mormugao'],
  'Karnataka': ['Karwar', 'Mangalore', 'Udupi'],
  'Kerala': ['Kochi', 'Thiruvananthapuram', 'Kollam'],
  'Tamil Nadu': ['Chennai', 'Cuddalore', 'Nagapattinam'],
  'Andhra Pradesh': ['Visakhapatnam', 'Kakinada', 'Machilipatnam'],
  'Odisha': ['Paradip', 'Gopalpur', 'Puri'],
  'West Bengal': ['Kolkata', 'Haldia', 'Digha']
};

const PredictionsSection = () => {
  const [selectedState, setSelectedState] = useState<string>('');
  const [selectedCity, setSelectedCity] = useState<string>('');
  const [prediction, setPrediction] = useState<any>(null);

  const handlePredict = () => {
    if (selectedState && selectedCity) {
      // Mock prediction data
      setPrediction({
        location: `${selectedCity}, ${selectedState}`,
        riskLevel: Math.random() > 0.5 ? 'High' : 'Moderate',
        rainfall: Math.floor(Math.random() * 100) + 20,
        windSpeed: Math.floor(Math.random() * 80) + 20,
        waveHeight: Math.floor(Math.random() * 5) + 1,
        temperature: Math.floor(Math.random() * 10) + 25
      });
    }
  };

  const handleMapClick = (state: string, city: string) => {
    setSelectedState(state);
    setSelectedCity(city);
  };

  return (
    <section id="predictions" className="py-20 bg-gradient-sky">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
            Weather Predictions
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Select a coastal region to get real-time weather predictions and threat assessments
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-12 max-w-7xl mx-auto">
          {/* Input Panel */}
          <div className="lg:col-span-2">
            <Card className="shadow-ocean">
              <CardHeader>
                <CardTitle className="text-2xl text-primary">Prediction Input</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <label className="block text-sm font-medium mb-2">Select Coastal State</label>
                  <Select value={selectedState} onValueChange={(value) => {
                    setSelectedState(value);
                    setSelectedCity('');
                    setPrediction(null);
                  }}>
                    <SelectTrigger>
                      <SelectValue placeholder="Choose a state..." />
                    </SelectTrigger>
                    <SelectContent>
                      {coastalStates.map((state) => (
                        <SelectItem key={state} value={state}>{state}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Select Coastal City</label>
                  <Select 
                    value={selectedCity} 
                    onValueChange={setSelectedCity}
                    disabled={!selectedState}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Choose a city..." />
                    </SelectTrigger>
                    <SelectContent>
                      {selectedState && citiesByState[selectedState]?.map((city) => (
                        <SelectItem key={city} value={city}>{city}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <Button 
                  onClick={handlePredict}
                  disabled={!selectedState || !selectedCity}
                  className="w-full hero-button text-lg py-6"
                >
                  Get Prediction
                </Button>

                {prediction && (
                  <Card className="mt-6 bg-accent/10 border-accent">
                    <CardHeader>
                      <CardTitle className="text-lg text-accent">Prediction Results</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-3">
                      <div className="flex justify-between">
                        <span>Location:</span>
                        <span className="font-semibold">{prediction.location}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Risk Level:</span>
                        <span className={`font-semibold ${
                          prediction.riskLevel === 'High' ? 'text-destructive' : 'text-secondary'
                        }`}>
                          {prediction.riskLevel}
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span>Expected Rainfall:</span>
                        <span className="font-semibold">{prediction.rainfall}mm</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Wind Speed:</span>
                        <span className="font-semibold">{prediction.windSpeed} km/h</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Wave Height:</span>
                        <span className="font-semibold">{prediction.waveHeight}m</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Temperature:</span>
                        <span className="font-semibold">{prediction.temperature}°C</span>
                      </div>
                    </CardContent>
                  </Card>
                )}
              </CardContent>
            </Card>
          </div>

          {/* Interactive Map */}
          <div className="lg:col-span-3">
            <Card className="shadow-ocean h-full">
              <CardHeader>
                <CardTitle className="text-2xl text-primary">Interactive Coastal Map</CardTitle>
                <p className="text-muted-foreground">Click on any coastal region to auto-fill the form</p>
              </CardHeader>
              <CardContent className="flex items-center justify-center h-96">
                <div className="relative max-w-full">
                  <img 
                    src={mapImage}
                    alt="India Coastal Map"
                    className="max-w-full h-auto rounded-lg shadow-card cursor-pointer hover:scale-105 transition-transform duration-300"
                    onClick={() => handleMapClick('Tamil Nadu', 'Chennai')}
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <p className="text-center text-muted-foreground bg-background/80 px-4 py-2 rounded-lg">
                      Interactive map coming soon!<br />
                      <span className="text-sm">Click to select Chennai, Tamil Nadu</span>
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PredictionsSection;