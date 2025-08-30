import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ArrowLeft, MapPin, AlertTriangle, Droplets, Wind, Waves, Thermometer } from 'lucide-react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, AreaChart, Area, BarChart, Bar } from 'recharts';

interface WeatherResultsProps {
  location: string;
  onBack: () => void;
}

// Mock weather data for charts
const hourlyData = [
  { time: '00:00', rainfall: 5, temperature: 26, windSpeed: 15, humidity: 78 },
  { time: '03:00', rainfall: 12, temperature: 25, windSpeed: 18, humidity: 82 },
  { time: '06:00', rainfall: 25, temperature: 24, windSpeed: 22, humidity: 85 },
  { time: '09:00', rainfall: 45, temperature: 23, windSpeed: 28, humidity: 88 },
  { time: '12:00', rainfall: 65, temperature: 22, windSpeed: 35, humidity: 92 },
  { time: '15:00', rainfall: 85, temperature: 21, windSpeed: 42, humidity: 95 },
  { time: '18:00', rainfall: 75, temperature: 22, windSpeed: 38, humidity: 90 },
  { time: '21:00', rainfall: 55, temperature: 24, windSpeed: 30, humidity: 85 },
];

const weeklyForecast = [
  { day: 'Today', high: 28, low: 22, rainfall: 85, risk: 'High' },
  { day: 'Tomorrow', high: 26, low: 20, rainfall: 65, risk: 'High' },
  { day: 'Wed', high: 29, low: 23, rainfall: 40, risk: 'Moderate' },
  { day: 'Thu', high: 31, low: 25, rainfall: 20, risk: 'Low' },
  { day: 'Fri', high: 30, low: 24, rainfall: 15, risk: 'Low' },
  { day: 'Sat', high: 29, low: 23, rainfall: 30, risk: 'Moderate' },
  { day: 'Sun', high: 27, low: 21, rainfall: 55, risk: 'High' },
];

const waveData = [
  { time: '00:00', height: 1.2 },
  { time: '04:00', height: 1.8 },
  { time: '08:00', height: 2.4 },
  { time: '12:00', height: 3.2 },
  { time: '16:00', height: 4.1 },
  { time: '20:00', height: 3.5 },
];

const alerts = [
  {
    id: 1,
    type: 'Coastal Surge',
    severity: 'High',
    message: 'Storm surge of 2-3 meters expected between 2 PM - 6 PM',
    icon: '🌊',
    time: 'Next 4 hours'
  },
  {
    id: 2,
    type: 'Heavy Rainfall',
    severity: 'High',
    message: 'Extremely heavy rainfall (>200mm) expected in next 6 hours',
    icon: '🌧️',
    time: 'Next 6 hours'
  },
  {
    id: 3,
    type: 'Strong Winds',
    severity: 'Moderate',
    message: 'Wind speeds may reach 60-80 kmph with gusts up to 100 kmph',
    icon: '💨',
    time: 'Next 8 hours'
  },
  {
    id: 4,
    type: 'Flood Warning',
    severity: 'High',
    message: 'Low-lying areas may experience flooding due to heavy rainfall',
    icon: '🚨',
    time: 'Active now'
  }
];

const WeatherResults = ({ location, onBack }: WeatherResultsProps) => {
  const [activeTab, setActiveTab] = useState('overview');

  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case 'High': return 'destructive';
      case 'Moderate': return 'secondary';
      case 'Low': return 'accent';
      default: return 'muted';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-sky py-8">
      <div className="container mx-auto px-6 max-w-7xl">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <Button 
            onClick={onBack}
            variant="outline"
            className="flex items-center space-x-2"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Predictions</span>
          </Button>
          
          <div className="flex items-center space-x-2 text-primary">
            <MapPin className="w-5 h-5" />
            <h1 className="text-2xl md:text-3xl font-bold">{location}</h1>
          </div>
          
          <div className="flex items-center space-x-2">
            <Badge variant="destructive" className="text-lg px-4 py-2">
              HIGH RISK
            </Badge>
          </div>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          <Card className="text-center bg-destructive/10 border-destructive/20">
            <CardContent className="p-4">
              <Droplets className="w-8 h-8 mx-auto mb-2 text-destructive" />
              <div className="text-2xl font-bold text-destructive">85mm</div>
              <div className="text-sm text-muted-foreground">Expected Rainfall</div>
            </CardContent>
          </Card>
          
          <Card className="text-center bg-accent/10 border-accent/20">
            <CardContent className="p-4">
              <Wind className="w-8 h-8 mx-auto mb-2 text-accent" />
              <div className="text-2xl font-bold text-accent">42 km/h</div>
              <div className="text-sm text-muted-foreground">Wind Speed</div>
            </CardContent>
          </Card>
          
          <Card className="text-center bg-secondary/10 border-secondary/20">
            <CardContent className="p-4">
              <Waves className="w-8 h-8 mx-auto mb-2 text-secondary" />
              <div className="text-2xl font-bold text-secondary">4.1m</div>
              <div className="text-sm text-muted-foreground">Wave Height</div>
            </CardContent>
          </Card>
          
          <Card className="text-center bg-primary/10 border-primary/20">
            <CardContent className="p-4">
              <Thermometer className="w-8 h-8 mx-auto mb-2 text-primary" />
              <div className="text-2xl font-bold text-primary">22°C</div>
              <div className="text-sm text-muted-foreground">Temperature</div>
            </CardContent>
          </Card>
        </div>

        {/* Tabs */}
        <div className="flex space-x-4 mb-6">
          {['overview', 'alerts', 'forecast'].map((tab) => (
            <Button
              key={tab}
              onClick={() => setActiveTab(tab)}
              variant={activeTab === tab ? 'default' : 'outline'}
              className="capitalize"
            >
              {tab}
            </Button>
          ))}
        </div>

        {/* Content based on active tab */}
        {activeTab === 'overview' && (
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Rainfall Chart */}
            <Card className="shadow-ocean">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Droplets className="w-5 h-5 text-primary" />
                  <span>24-Hour Rainfall Forecast</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <AreaChart data={hourlyData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="time" />
                    <YAxis />
                    <Tooltip 
                      formatter={(value) => [`${value}mm`, 'Rainfall']}
                      labelStyle={{ color: '#333' }}
                    />
                    <Area 
                      type="monotone" 
                      dataKey="rainfall" 
                      stroke="hsl(var(--primary))" 
                      fill="hsl(var(--primary) / 0.3)" 
                    />
                  </AreaChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>

            {/* Wave Height Chart */}
            <Card className="shadow-ocean">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Waves className="w-5 h-5 text-secondary" />
                  <span>Wave Height Prediction</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <LineChart data={waveData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="time" />
                    <YAxis />
                    <Tooltip 
                      formatter={(value) => [`${value}m`, 'Wave Height']}
                      labelStyle={{ color: '#333' }}
                    />
                    <Line 
                      type="monotone" 
                      dataKey="height" 
                      stroke="hsl(var(--secondary))" 
                      strokeWidth={3}
                      dot={{ fill: 'hsl(var(--secondary))', strokeWidth: 2, r: 6 }}
                    />
                  </LineChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>

            {/* Wind & Temperature */}
            <Card className="shadow-ocean lg:col-span-2">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Wind className="w-5 h-5 text-accent" />
                  <span>Wind Speed & Temperature Trends</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <LineChart data={hourlyData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="time" />
                    <YAxis yAxisId="left" />
                    <YAxis yAxisId="right" orientation="right" />
                    <Tooltip 
                      formatter={(value, name) => [
                        name === 'windSpeed' ? `${value} km/h` : `${value}°C`,
                        name === 'windSpeed' ? 'Wind Speed' : 'Temperature'
                      ]}
                      labelStyle={{ color: '#333' }}
                    />
                    <Line 
                      yAxisId="left"
                      type="monotone" 
                      dataKey="windSpeed" 
                      stroke="hsl(var(--accent))" 
                      strokeWidth={2}
                      name="windSpeed"
                    />
                    <Line 
                      yAxisId="right"
                      type="monotone" 
                      dataKey="temperature" 
                      stroke="hsl(var(--primary))" 
                      strokeWidth={2}
                      name="temperature"
                    />
                  </LineChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
          </div>
        )}

        {activeTab === 'alerts' && (
          <div className="space-y-6">
            <div className="flex items-center space-x-2 mb-6">
              <AlertTriangle className="w-6 h-6 text-destructive" />
              <h2 className="text-2xl font-bold text-destructive">Active Weather Alerts</h2>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
              {alerts.map((alert) => (
                <Card key={alert.id} className="border-l-4 border-l-destructive alert-card">
                  <CardHeader className="pb-3">
                    <div className="flex items-start justify-between">
                      <div className="flex items-center space-x-3">
                        <span className="text-2xl">{alert.icon}</span>
                        <div>
                          <CardTitle className="text-lg text-primary">{alert.type}</CardTitle>
                          <Badge variant={getSeverityColor(alert.severity) as any}>
                            {alert.severity} Risk
                          </Badge>
                        </div>
                      </div>
                      <span className="text-sm text-muted-foreground">{alert.time}</span>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-foreground">{alert.message}</p>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Emergency Actions */}
            <Card className="bg-destructive/5 border-destructive/20">
              <CardHeader>
                <CardTitle className="text-destructive">🚨 Immediate Actions Required</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-foreground">
                  <li>• <strong>Evacuate</strong> low-lying coastal areas immediately</li>
                  <li>• <strong>Secure</strong> all loose outdoor items and equipment</li>
                  <li>• <strong>Stock up</strong> on emergency supplies (water, food, medicines)</li>
                  <li>• <strong>Avoid</strong> venturing near the coastline or beaches</li>
                  <li>• <strong>Stay indoors</strong> and monitor official weather updates</li>
                  <li>• <strong>Keep</strong> emergency contact numbers readily available</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        )}

        {activeTab === 'forecast' && (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-primary mb-6">7-Day Weather Forecast</h2>
            
            <Card className="shadow-ocean">
              <CardHeader>
                <CardTitle>Weekly Rainfall Probability</CardTitle>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <BarChart data={weeklyForecast}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="day" />
                    <YAxis />
                    <Tooltip 
                      formatter={(value) => [`${value}mm`, 'Expected Rainfall']}
                      labelStyle={{ color: '#333' }}
                    />
                    <Bar dataKey="rainfall" fill="hsl(var(--primary))" />
                  </BarChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
              {weeklyForecast.map((day, index) => (
                <Card key={index} className="text-center alert-card">
                  <CardContent className="p-4">
                    <div className="font-semibold text-primary mb-2">{day.day}</div>
                    <div className="text-3xl mb-2">
                      {day.risk === 'High' ? '🌧️' : day.risk === 'Moderate' ? '⛅' : '☀️'}
                    </div>
                    <div className="flex justify-between text-sm mb-2">
                      <span className="font-semibold">{day.high}°</span>
                      <span className="text-muted-foreground">{day.low}°</span>
                    </div>
                    <div className="text-xs text-muted-foreground mb-2">{day.rainfall}mm rain</div>
                    <Badge 
                      variant={getSeverityColor(day.risk) as any}
                      className="text-xs"
                    >
                      {day.risk}
                    </Badge>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default WeatherResults;