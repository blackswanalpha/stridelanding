import React from "react";
import { Button } from "./button";
import { Input } from "./input";

export function Footer() {
  return (
    <footer className="bg-gray-50 border-t">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Stride</h3>
            <p className="text-sm text-gray-600">
              Empowering professionals to achieve more while maintaining
              balance.
            </p>
          </div>

          <div className="space-y-4">
            <h4 className="text-sm font-semibold">Product</h4>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>Features</li>
              <li>Pricing</li>
              <li>Integrations</li>
              <li>Enterprise</li>
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="text-sm font-semibold">Company</h4>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>About</li>
              <li>Blog</li>
              <li>Careers</li>
              <li>Contact</li>
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="text-sm font-semibold">Stay Updated</h4>
            <p className="text-sm text-gray-600">
              Subscribe to our newsletter for updates and tips.
            </p>
            <div className="flex gap-2">
              <Input
                type="email"
                placeholder="Enter your email"
                className="max-w-[200px]"
              />
              <Button>Subscribe</Button>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t text-center text-sm text-gray-600">
          © {new Date().getFullYear()} Stride. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
