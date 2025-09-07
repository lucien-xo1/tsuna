import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ExternalLink, MessageSquare, Image, Video, Bot, ArrowRight, Book, Sparkles } from "lucide-react";
import tsunaAvatar from "@assets/EMXN1y8qTQoGdXBsb2FkEg55bGFiLXN0dW50LXNncBoza2xpbmcvZG93bmxvYWQvTWpnNE5UUTBNREl5TXpJd05URXlNVE00TVRZMk5qZ3dPUT09_1756657273136.png";

export default function Home() {
  const inviteUrl = "https://discord.com/oauth2/authorize?client_id=1410385171890573424&permissions=414464723008&integration_type=0&scope=bot";

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header */}
      <header className="border-b border-border bg-background/80 backdrop-blur-sm sticky top-0 z-50" data-testid="header-navigation">
        <div className="container mx-auto px-4 py-4">
          <nav className="flex items-center justify-between">
            <div className="flex items-center space-x-3" data-testid="logo-section">
              <div className="w-10 h-10 rounded-lg overflow-hidden ring-1 ring-primary/20">
                <img src={tsunaAvatar} alt="Tsuna Bot" className="w-full h-full object-cover" />
              </div>
              <h1 className="text-2xl font-bold gradient-text">Tsuna</h1>
            </div>
            
            <div className="hidden md:flex items-center space-x-8" data-testid="nav-links">
              <button 
                onClick={() => scrollToSection('features')} 
                className="text-muted-foreground hover:text-foreground transition-colors"
                data-testid="link-features"
              >
                Features
              </button>
              <button 
                onClick={() => scrollToSection('commands')} 
                className="text-muted-foreground hover:text-foreground transition-colors"
                data-testid="link-commands"
              >
                Commands
              </button>
              <button 
                onClick={() => scrollToSection('invite')} 
                className="text-muted-foreground hover:text-foreground transition-colors"
                data-testid="link-get-started"
              >
                Get Started
              </button>
            </div>

            <Button 
              asChild 
              className="bg-primary hover:bg-primary/90 text-primary-foreground"
              data-testid="button-add-to-server"
            >
              <a href={inviteUrl} target="_blank" rel="noopener noreferrer">
                <Sparkles className="mr-2 h-4 w-4" />
                Add to Server
              </a>
            </Button>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 overflow-hidden" data-testid="section-hero">
        <div className="hero-glow absolute inset-0"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <div className="flex justify-center mb-8">
              <div className="w-24 h-24 rounded-2xl overflow-hidden shadow-2xl ring-2 ring-primary/20">
                <img src={tsunaAvatar} alt="Tsuna Bot Avatar" className="w-full h-full object-cover" />
              </div>
            </div>
            
            <h1 className="text-5xl lg:text-7xl font-bold mb-6 gradient-text leading-tight" data-testid="text-hero-title">
              Meet Tsuna
            </h1>
            
            <p className="text-xl lg:text-2xl text-muted-foreground mb-8 leading-relaxed" data-testid="text-hero-description">
              Your all-in-one Discord companion for <span className="text-accent font-semibold">intelligent conversations</span>, 
              <span className="text-secondary font-semibold">creative content generation</span>, 
              <span className="text-primary font-semibold">roleplay scenarios</span>, and 
              <span className="text-accent font-semibold">document analysis</span>
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button 
                asChild 
                size="lg" 
                className="bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 text-primary-foreground px-8 py-4 text-lg shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all"
                data-testid="button-invite-hero"
              >
                <a href={inviteUrl} target="_blank" rel="noopener noreferrer">
                  <Sparkles className="mr-2 h-5 w-5" />
                  Add Tsuna to Discord
                  <ArrowRight className="ml-2 h-5 w-5" />
                </a>
              </Button>
              
              <Button 
                variant="outline" 
                size="lg" 
                onClick={() => scrollToSection('commands')} 
                className="border-border hover:bg-muted text-foreground px-8 py-4 text-lg"
                data-testid="button-view-commands"
              >
                <Book className="mr-2 h-5 w-5" />
                View Commands
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-muted/30" data-testid="section-features">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-4 gradient-text" data-testid="text-features-title">Powerful Features</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto" data-testid="text-features-description">
              Discover what makes Tsuna the perfect addition to your Discord server
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
            <Card className="bg-card border border-border rounded-2xl p-6 hover:border-primary/50 transition-all group" data-testid="card-feature-chat">
              <div className="feature-icon mb-4 group-hover:scale-110 transition-transform w-10 h-10">
                <MessageSquare className="text-white h-5 w-5" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-foreground">Chat & Conversation</h3>
              <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                Natural conversations and status checking for seamless interaction.
              </p>
              <div className="bg-muted rounded-lg p-2">
                <code className="text-accent font-mono text-xs">/chat /status</code>
              </div>
            </Card>

            <Card className="bg-card border border-border rounded-2xl p-6 hover:border-secondary/50 transition-all group" data-testid="card-feature-creative">
              <div className="mb-4 group-hover:scale-110 transition-transform w-10 h-10 rounded-xl flex items-center justify-center" style={{background: "linear-gradient(135deg, hsl(262, 83%, 58%), hsl(187, 92%, 39%))"}}>
                <Image className="text-white h-5 w-5" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-foreground">Creative Content</h3>
              <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                Generate images, videos, and animate existing images with AI.
              </p>
              <div className="bg-muted rounded-lg p-2">
                <code className="text-secondary font-mono text-xs">/imagine /video /animate</code>
              </div>
            </Card>

            <Card className="bg-card border border-border rounded-2xl p-6 hover:border-accent/50 transition-all group" data-testid="card-feature-roleplay">
              <div className="mb-4 group-hover:scale-110 transition-transform w-10 h-10 rounded-xl flex items-center justify-center" style={{background: "linear-gradient(135deg, hsl(187, 92%, 39%), hsl(243, 75%, 59%))"}}>
                <Video className="text-white h-5 w-5" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-foreground">Roleplay Features</h3>
              <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                Create custom roleplay scenarios for immersive experiences.
              </p>
              <div className="bg-muted rounded-lg p-2">
                <code className="text-accent font-mono text-xs">/roleplay /stop_roleplay</code>
              </div>
            </Card>

            <Card className="bg-card border border-border rounded-2xl p-6 hover:border-primary/50 transition-all group" data-testid="card-feature-document">
              <div className="mb-4 group-hover:scale-110 transition-transform w-10 h-10 rounded-xl flex items-center justify-center" style={{background: "linear-gradient(135deg, hsl(243, 75%, 59%), hsl(262, 83%, 58%))"}}>
                <Book className="text-white h-5 w-5" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-foreground">Document Analysis</h3>
              <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                Summarize documents and answer questions about uploaded files.
              </p>
              <div className="bg-muted rounded-lg p-2">
                <code className="text-primary font-mono text-xs">/summarize /ask</code>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Commands Section */}
      <section id="commands" className="py-20" data-testid="section-commands">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-4 gradient-text" data-testid="text-commands-title">Command Reference</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto" data-testid="text-commands-description">
              Master Tsuna's capabilities with these simple commands
            </p>
          </div>

          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-6">
            <div className="command-card rounded-2xl p-6" data-testid="card-commands-chat">
              <div className="mb-4">
                <h3 className="text-xl font-bold text-foreground mb-2 flex items-center gap-2">
                  💬 Chat & Conversation
                </h3>
              </div>
              <div className="space-y-3 text-sm">
                <div className="bg-muted rounded-lg p-3">
                  <code className="text-accent font-mono">/chat &lt;message&gt;</code>
                  <p className="text-muted-foreground mt-1">Chat with me about anything!</p>
                </div>
                <div className="bg-muted rounded-lg p-3">
                  <code className="text-accent font-mono">/status</code>
                  <p className="text-muted-foreground mt-1">Check my status and your active scenarios</p>
                </div>
              </div>
            </div>

            <div className="command-card rounded-2xl p-6" data-testid="card-commands-creative">
              <div className="mb-4">
                <h3 className="text-xl font-bold text-foreground mb-2 flex items-center gap-2">
                  🎨 Creative Commands
                </h3>
              </div>
              <div className="space-y-3 text-sm">
                <div className="bg-muted rounded-lg p-3">
                  <code className="text-secondary font-mono">/imagine &lt;prompt&gt;</code>
                  <p className="text-muted-foreground mt-1">I'll create beautiful images for you using AI</p>
                </div>
                <div className="bg-muted rounded-lg p-3">
                  <code className="text-secondary font-mono">/video &lt;prompt&gt;</code>
                  <p className="text-muted-foreground mt-1">I'll create amazing videos using Google Veo 2.0</p>
                </div>
                <div className="bg-muted rounded-lg p-3">
                  <code className="text-secondary font-mono">/animate &lt;image&gt; &lt;prompt&gt;</code>
                  <p className="text-muted-foreground mt-1">Upload an image and I'll animate it into a video!</p>
                </div>
              </div>
            </div>

            <div className="command-card rounded-2xl p-6" data-testid="card-commands-roleplay">
              <div className="mb-4">
                <h3 className="text-xl font-bold text-foreground mb-2 flex items-center gap-2">
                  🎭 Roleplay Features
                </h3>
              </div>
              <div className="space-y-3 text-sm">
                <div className="bg-muted rounded-lg p-3">
                  <code className="text-primary font-mono">/roleplay &lt;scenario&gt;</code>
                  <p className="text-muted-foreground mt-1">Start any custom roleplay scenario you can imagine</p>
                </div>
                <div className="bg-muted rounded-lg p-3">
                  <code className="text-primary font-mono">/stop_roleplay</code>
                  <p className="text-muted-foreground mt-1">End the current roleplay scenario</p>
                </div>
              </div>
            </div>

            <div className="command-card rounded-2xl p-6" data-testid="card-commands-document">
              <div className="mb-4">
                <h3 className="text-xl font-bold text-foreground mb-2 flex items-center gap-2">
                  📄 Document Analysis
                </h3>
              </div>
              <div className="space-y-3 text-sm">
                <div className="bg-muted rounded-lg p-3">
                  <code className="text-accent font-mono">/summarize &lt;file&gt;</code>
                  <p className="text-muted-foreground mt-1">Upload any document (PDF, text, images) and I'll summarize it</p>
                </div>
                <div className="bg-muted rounded-lg p-3">
                  <code className="text-accent font-mono">/ask &lt;file&gt; &lt;question&gt;</code>
                  <p className="text-muted-foreground mt-1">Upload a document and ask me specific questions about it</p>
                </div>
              </div>
            </div>

            <div className="command-card rounded-2xl p-6" data-testid="card-commands-help">
              <div className="mb-4">
                <h3 className="text-xl font-bold text-foreground mb-2 flex items-center gap-2">
                  ℹ️ Help & Info
                </h3>
              </div>
              <div className="space-y-3 text-sm">
                <div className="bg-muted rounded-lg p-3">
                  <code className="text-primary font-mono">/help</code>
                  <p className="text-muted-foreground mt-1">Shows this help message</p>
                </div>
              </div>
            </div>

            <div className="command-card rounded-2xl p-6" data-testid="card-commands-admin">
              <div className="mb-4">
                <h3 className="text-xl font-bold text-foreground mb-2 flex items-center gap-2">
                  ⚙️ Admin Commands
                </h3>
              </div>
              <div className="space-y-3 text-sm">
                <div className="bg-muted rounded-lg p-3">
                  <code className="text-destructive font-mono">/nsfw_roleplay_toggle &lt;enable&gt;</code>
                  <p className="text-muted-foreground mt-1">[Admin Only] Enable/disable NSFW roleplay content</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section id="invite" className="py-20 bg-gradient-to-b from-background to-muted/30" data-testid="section-cta">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6 gradient-text" data-testid="text-cta-title">
              Ready to Transform Your Server?
            </h2>


            <Button 
              asChild 
              size="lg" 
              className="bg-gradient-to-r from-primary via-secondary to-accent hover:from-primary/90 hover:via-secondary/90 hover:to-accent/90 text-primary-foreground px-10 py-5 text-xl shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all"
              data-testid="button-invite-cta"
            >
              <a href={inviteUrl} target="_blank" rel="noopener noreferrer">
                <Sparkles className="mr-3 h-6 w-6" />
                Invite Tsuna Now
                <ExternalLink className="ml-3 h-6 w-6" />
              </a>
            </Button>

            <p className="text-sm text-muted-foreground mt-6" data-testid="text-cta-features">
              Free to use • No setup required • Instant activation
            </p>
          </div>
        </div>
      </section>

      {/* Get Started Section */}
      <section className="py-20 border-t border-border" data-testid="section-get-started">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4 gradient-text" data-testid="text-steps-title">Get Started in 3 Steps</h2>
              <p className="text-xl text-muted-foreground" data-testid="text-steps-description">
                Setting up Tsuna is quick and easy
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center group" data-testid="step-1">
                <div className="w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                  <span className="text-2xl font-bold text-primary-foreground">1</span>
                </div>
                <h3 className="text-xl font-bold mb-4 text-foreground">Click Invite</h3>
                <p className="text-muted-foreground">
                  Click the "Add to Server" button to open Discord's authorization page
                </p>
              </div>

              <div className="text-center group" data-testid="step-2">
                <div className="w-16 h-16 bg-gradient-to-br from-secondary to-accent rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                  <span className="text-2xl font-bold text-primary-foreground">2</span>
                </div>
                <h3 className="text-xl font-bold mb-4 text-foreground">Select Server</h3>
                <p className="text-muted-foreground">
                  Choose which Discord server you'd like to add Tsuna to and grant permissions
                </p>
              </div>

              <div className="text-center group" data-testid="step-3">
                <div className="w-16 h-16 bg-gradient-to-br from-accent to-primary rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                  <span className="text-2xl font-bold text-primary-foreground">3</span>
                </div>
                <h3 className="text-xl font-bold mb-4 text-foreground">Start Creating</h3>
                <p className="text-muted-foreground">
                  Type any of the commands and watch Tsuna bring your ideas to life instantly
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border bg-muted/20 py-12" data-testid="footer">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="flex items-center space-x-3 mb-4 md:mb-0" data-testid="footer-logo">
              <div className="w-8 h-8 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center">
                <Bot className="text-white h-4 w-4" />
              </div>
              <span className="text-xl font-bold gradient-text">Tsuna</span>
            </div>
            
            <div className="text-center md:text-right">
              <p className="text-xs text-muted-foreground" data-testid="text-copyright">
                © 2025 Tsuna Bot. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
