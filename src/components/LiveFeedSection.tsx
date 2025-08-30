import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const mockAlerts = [
  {
    id: 1,
    region: 'Chennai, Tamil Nadu',
    headline: 'Heavy Rainfall Warning Issued',
    timestamp: '2 hours ago',
    source: 'IMD Weather',
    severity: 'High',
    description: 'Expect heavy to very heavy rainfall with strong winds'
  },
  {
    id: 2,
    region: 'Mumbai, Maharashtra',
    headline: 'Coastal Flooding Alert',
    timestamp: '4 hours ago',
    source: 'Coast Guard',
    severity: 'Moderate',
    description: 'High tide conditions may cause minor flooding in low-lying areas'
  },
  {
    id: 3,
    region: 'Visakhapatnam, Andhra Pradesh',
    headline: 'Strong Wind Advisory',
    timestamp: '6 hours ago',
    source: 'IMD Weather',
    severity: 'Moderate',
    description: 'Wind speeds of 40-50 kmph expected along the coast'
  },
  {
    id: 4,
    region: 'Kochi, Kerala',
    headline: 'All Clear - Normal Conditions',
    timestamp: '8 hours ago',
    source: 'Local Weather',
    severity: 'Low',
    description: 'Weather conditions remain stable with light winds'
  },
  {
    id: 5,
    region: 'Kolkata, West Bengal',
    headline: 'Monsoon Update',
    timestamp: '10 hours ago',
    source: 'IMD Weather',
    severity: 'Moderate',
    description: 'Moderate rainfall expected over the next 24-48 hours'
  },
  {
    id: 6,
    region: 'Paradip, Odisha',
    headline: 'Cyclone Watch Initiated',
    timestamp: '12 hours ago',
    source: 'Cyclone Warning Center',
    severity: 'High',
    description: 'Depression in Bay of Bengal under close monitoring'
  }
];

const getSeverityColor = (severity: string) => {
  switch (severity) {
    case 'High':
      return 'destructive';
    case 'Moderate':
      return 'secondary';
    case 'Low':
      return 'accent';
    default:
      return 'muted';
  }
};

const getSeverityIcon = (severity: string) => {
  switch (severity) {
    case 'High':
      return '🚨';
    case 'Moderate':
      return '⚠️';
    case 'Low':
      return '✅';
    default:
      return 'ℹ️';
  }
};

const LiveFeedSection = () => {
  return (
    <section id="live-feed" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
            Live Weather Alerts & News
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Stay updated with real-time weather alerts and coastal threat notifications
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {mockAlerts.map((alert) => (
            <Card key={alert.id} className="alert-card">
              <CardHeader className="pb-3">
                <div className="flex items-start justify-between">
                  <div className="flex items-center space-x-2">
                    <span className="text-2xl">{getSeverityIcon(alert.severity)}</span>
                    <Badge variant={getSeverityColor(alert.severity) as any}>
                      {alert.severity}
                    </Badge>
                  </div>
                  <span className="text-sm text-muted-foreground">{alert.timestamp}</span>
                </div>
                <CardTitle className="text-lg text-primary">{alert.region}</CardTitle>
              </CardHeader>
              <CardContent>
                <h3 className="font-semibold text-foreground mb-2">{alert.headline}</h3>
                <p className="text-sm text-muted-foreground mb-3">{alert.description}</p>
                <div className="flex justify-between items-center text-xs">
                  <span className="text-accent font-medium">Source: {alert.source}</span>
                  <button className="text-primary hover:text-primary-glow transition-colors">
                    Read more →
                  </button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-4">Updates refresh every 5 minutes</p>
          <div className="inline-flex items-center space-x-2">
            <div className="w-2 h-2 bg-accent rounded-full animate-pulse"></div>
            <span className="text-sm text-accent font-medium">Live Feed Active</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LiveFeedSection;