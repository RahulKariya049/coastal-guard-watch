import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-16">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-12 max-w-6xl mx-auto">
          {/* About Section */}
          <div>
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-8 h-8 bg-accent rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">🌊</span>
              </div>
              <span className="font-bold text-xl">Meteorofy</span>
            </div>
            <p className="text-primary-foreground/80 leading-relaxed">
              A comprehensive monitoring system designed to track coastal threats and provide 
              early warnings for India's vulnerable coastal regions. Our mission is to protect 
              communities through accurate predictions and timely alerts.
            </p>
            <div className="mt-4 text-sm text-primary-foreground/60">
              <p className="font-semibold mb-1">⚠️ Important Disclaimer:</p>
              <p>This is a demonstration system. For official weather warnings, always consult IMD and local authorities.</p>
            </div>
          </div>

          {/* Emergency Numbers */}
          <div>
            <CardHeader className="px-0 pb-4">
              <CardTitle className="text-xl text-accent">Emergency Contacts</CardTitle>
            </CardHeader>
            <CardContent className="px-0 space-y-4">
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <span className="text-2xl">🚨</span>
                  <div>
                    <p className="font-semibold">National Disaster Helpline</p>
                    <p className="text-accent text-lg font-mono">1078</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="text-2xl">⛵</span>
                  <div>
                    <p className="font-semibold">Coastal Guard Emergency</p>
                    <p className="text-accent text-lg font-mono">1554</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="text-2xl">🌪️</span>
                  <div>
                    <p className="font-semibold">Cyclone Warning Center</p>
                    <p className="text-accent text-lg font-mono">1588</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="text-2xl">📱</span>
                  <div>
                    <p className="font-semibold">State Emergency Operations</p>
                    <p className="text-primary-foreground/60 text-sm">Contact your local SDMA</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </div>

          {/* Links & Resources */}
          <div>
            <CardHeader className="px-0 pb-4">
              <CardTitle className="text-xl text-accent">Resources & Links</CardTitle>
            </CardHeader>
            <CardContent className="px-0">
              <div className="space-y-6">
                <div>
                  <h4 className="font-semibold mb-3">Official Sources</h4>
                  <ul className="space-y-2 text-primary-foreground/80">
                    <li>
                      <a href="https://mausam.imd.gov.in" target="_blank" rel="noopener noreferrer" 
                         className="hover:text-accent transition-colors">
                        🌡️ India Meteorological Department
                      </a>
                    </li>
                    <li>
                      <a href="https://incois.gov.in" target="_blank" rel="noopener noreferrer"
                         className="hover:text-accent transition-colors">
                        🌊 Indian National Centre for Ocean Information
                      </a>
                    </li>
                    <li>
                      <a href="https://ndma.gov.in" target="_blank" rel="noopener noreferrer"
                         className="hover:text-accent transition-colors">
                        🏛️ National Disaster Management Authority
                      </a>
                    </li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-semibold mb-3">Quick Links</h4>
                  <ul className="space-y-2 text-primary-foreground/80">
                    <li>
                      <button className="hover:text-accent transition-colors text-left">
                        📋 Privacy Policy
                      </button>
                    </li>
                    <li>
                      <button className="hover:text-accent transition-colors text-left">
                        📧 Contact Us
                      </button>
                    </li>
                    <li>
                      <button className="hover:text-accent transition-colors text-left">
                        📱 Mobile App (Coming Soon)
                      </button>
                    </li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-primary-foreground/20 mt-12 pt-8 text-center">
          <p className="text-primary-foreground/60">
            © 2024 Meteorofy Monitoring System. Built for safer coastal communities.
          </p>
          <p className="text-sm text-primary-foreground/40 mt-2">
            Always follow official emergency protocols and local authority guidance.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;