import React, { useState } from "react";
import { Card, CardContent } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Label } from "../components/ui/label";
import { Select, SelectItem } from "../components/ui/select";

export default function ExploreMore() {
  const [search, setSearch] = useState("");
  const [region, setRegion] = useState("");

  return (
    <div className="min-h-screen bg-white text-gray-800">
      <header className="bg-blue-700 text-white p-6 shadow-md">
        <h1 className="text-3xl font-bold">ExploreMore</h1>
        <p className="text-sm">Your Corporate Travel Booking Partner</p>
      </header>

      <main className="p-6 grid gap-6">
        <section className="text-center">
          <h2 className="text-2xl font-semibold mb-2">Welcome to ExploreMore</h2>
          <p className="max-w-xl mx-auto">
            ExploreMore is your go-to platform for corporate travel bookings across the globe.
          </p>
        </section>

        <section className="bg-gray-100 p-4 rounded shadow">
          <h2 className="text-xl font-semibold mb-4">Quick Booking Search</h2>
          <div className="grid gap-4 md:grid-cols-3">
            <div>
              <Label>Search Destination</Label>
              <Input
                placeholder="e.g., London, Tokyo, NYC"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
            </div>
            <div>
              <Label>Select Region</Label>
              <Select onChange={(e) => setRegion(e.target.value)} defaultValue="">
                <SelectItem value="Europe">Europe</SelectItem>
                <SelectItem value="Asia">Asia</SelectItem>
                <SelectItem value="USA">USA</SelectItem>
              </Select>
            </div>
            <div className="flex items-end">
              <Button className="w-full">Search</Button>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-2">Tours</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {["Europe", "Asia", "USA"].map((region) => (
              <Card key={region} className="shadow-md">
                <CardContent className="p-4">
                  <h3 className="text-lg font-semibold mb-1">{region} Tours</h3>
                  <p>Explore curated business-friendly tours in {region} tailored for corporate travelers.</p>
                  <Button className="mt-2 w-full">View Packages</Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      </main>

      <footer className="bg-blue-700 text-white p-4 text-center mt-10">
        <p>&copy; 2025 ExploreMore. All rights reserved.</p>
      </footer>
    </div>
  );
}
