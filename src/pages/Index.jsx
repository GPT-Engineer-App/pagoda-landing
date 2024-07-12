import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Globe, Facebook, Twitter, Instagram } from "lucide-react";

const Index = () => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-14 items-center">
          <div className="mr-4 hidden md:flex">
            <a className="mr-6 flex items-center space-x-2" href="/">
              <Globe className="h-6 w-6" />
              <span className="hidden font-bold sm:inline-block">
                China Explorer
              </span>
            </a>
            <nav className="flex items-center space-x-6 text-sm font-medium">
              <a className="transition-colors hover:text-foreground/80 text-foreground/60" href="#home">Home</a>
              <a className="transition-colors hover:text-foreground/80 text-foreground/60" href="#culture">Culture</a>
              <a className="transition-colors hover:text-foreground/80 text-foreground/60" href="#history">History</a>
              <a className="transition-colors hover:text-foreground/80 text-foreground/60" href="#tourism">Tourism</a>
              <a className="transition-colors hover:text-foreground/80 text-foreground/60" href="#contact">Contact</a>
            </nav>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-grow">
        {/* Hero Section */}
        <section id="home" className="relative h-[600px]">
          <img src="/placeholder.svg" alt="China Landscape" className="absolute inset-0 w-full h-full object-cover" />
          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
            <div className="text-center text-white">
              <h1 className="text-4xl md:text-6xl font-bold mb-4">Discover the Wonders of China</h1>
              <p className="text-xl md:text-2xl mb-8">Explore the rich culture, history, and breathtaking landscapes of China.</p>
              <Button size="lg" onClick={() => document.getElementById('culture').scrollIntoView({ behavior: 'smooth' })}>
                Learn More
              </Button>
            </div>
          </div>
        </section>

        {/* Culture Section */}
        <section id="culture" className="py-16 bg-gray-100">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 text-center">Culture</h2>
            <p className="text-lg mb-8 text-center max-w-3xl mx-auto">
              Chinese culture is one of the world's oldest and most complex. It encompasses diverse traditions, customs, and values that have evolved over thousands of years.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {['Festival', 'Clothing', 'Cuisine'].map((item) => (
                <Card key={item}>
                  <CardHeader>
                    <CardTitle>{item}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <img src="/placeholder.svg" alt={`Chinese ${item}`} className="w-full h-48 object-cover mb-4" />
                    <CardDescription>Experience the vibrant {item.toLowerCase()} of China.</CardDescription>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* History Section */}
        <section id="history" className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 text-center">History</h2>
            <p className="text-lg mb-8 text-center max-w-3xl mx-auto">
              China's history spans thousands of years, marked by numerous dynasties, technological advancements, and cultural achievements.
            </p>
            <div className="space-y-4">
              {[
                { year: "2100 BCE", event: "Xia Dynasty - The first dynasty in traditional Chinese historiography" },
                { year: "221 BCE", event: "Qin Dynasty - Unification of China under Emperor Qin Shi Huang" },
                { year: "1271-1368", event: "Yuan Dynasty - The Mongol Empire rules China" },
                { year: "1912", event: "Republic of China established, ending imperial rule" },
                { year: "1949", event: "People's Republic of China founded" }
              ].map((item) => (
                <Card key={item.year}>
                  <CardHeader>
                    <CardTitle>{item.year}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription>{item.event}</CardDescription>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Tourism Section */}
        <section id="tourism" className="py-16 bg-gray-100">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 text-center">Tourism</h2>
            <p className="text-lg mb-8 text-center max-w-3xl mx-auto">
              China offers a wealth of tourist attractions, from ancient wonders to modern marvels.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { title: "Great Wall", description: "One of the world's most iconic landmarks" },
                { title: "Forbidden City", description: "Imperial palace complex in the heart of Beijing" },
                { title: "Terracotta Army", description: "Thousands of life-sized warrior statues" }
              ].map((item) => (
                <Card key={item.title}>
                  <CardHeader>
                    <CardTitle>{item.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <img src="/placeholder.svg" alt={item.title} className="w-full h-48 object-cover mb-4" />
                    <CardDescription>{item.description}</CardDescription>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 text-center">Contact Us</h2>
            <form className="max-w-md mx-auto">
              <div className="space-y-4">
                <Input placeholder="Name" />
                <Input type="email" placeholder="Email" />
                <Textarea placeholder="Message" />
                <Button type="submit" className="w-full">Send Message</Button>
              </div>
            </form>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-between items-center">
            <div className="w-full md:w-1/3 mb-6 md:mb-0">
              <h3 className="text-xl font-bold mb-2">China Explorer</h3>
              <p>Discover the beauty and wonders of China</p>
            </div>
            <div className="w-full md:w-1/3 mb-6 md:mb-0">
              <h4 className="text-lg font-semibold mb-2">Quick Links</h4>
              <nav className="space-y-2">
                <a href="#home" className="block hover:text-gray-300">Home</a>
                <a href="#culture" className="block hover:text-gray-300">Culture</a>
                <a href="#history" className="block hover:text-gray-300">History</a>
                <a href="#tourism" className="block hover:text-gray-300">Tourism</a>
                <a href="#contact" className="block hover:text-gray-300">Contact</a>
              </nav>
            </div>
            <div className="w-full md:w-1/3">
              <h4 className="text-lg font-semibold mb-2">Follow Us</h4>
              <div className="flex space-x-4">
                <a href="#" className="hover:text-gray-300"><Facebook /></a>
                <a href="#" className="hover:text-gray-300"><Twitter /></a>
                <a href="#" className="hover:text-gray-300"><Instagram /></a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;