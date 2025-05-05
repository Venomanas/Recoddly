import React, { useState, useRef } from "react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";
import { Link } from "react-router-dom";
import { QRCodeSVG } from "qrcode.react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { CONFIG } from "@/lib/config";

const Preview = () => {
  const [copied, setCopied] = useState(false);
  const { toast } = useToast();
  const qrRef = useRef<SVGSVGElement>(null);

  // Mock data for preview
  const profile = {
    username: "username",
    displayName: "John Doe",
    bio: "Digital Creator",
    links: [
      { id: "1", title: "Instagram", url: "https://instagram.com/username" },
      { id: "2", title: "YouTube", url: "https://youtube.com/c/username" },
      { id: "3", title: "Twitter", url: "https://twitter.com/username" },
      { id: "4", title: "My Website", url: "https://example.com" },
      { id: "5", title: "Latest Project", url: "https://example.com/project" },
    ],
    background: "linear-gradient(135deg, #9b87f5 0%, #6E59A5 100%)",
    buttonStyle:
      "bg-white text-brand-purple hover:bg-opacity-90 transition-all",
    fontStyle: "font-sans",
  };

  // Generate page URL using the configurable base URL
  const pageUrl = `${CONFIG.baseUrl}/${profile.username}`;

  const handleCopyLink = () => {
    navigator.clipboard.writeText(pageUrl);
    setCopied(true);
    toast({
      title: "Link copied",
      description: "Your link page URL has been copied to clipboard",
    });

    setTimeout(() => setCopied(false), 2000);
  };

  const handleDownloadQRCode = () => {
    // Fix: Use the SVG to convert to a PNG for download
    if (!qrRef.current) return;

    // Create a canvas element
    const canvas = document.createElement("canvas");
    const svg = qrRef.current;
    const svgData = new XMLSerializer().serializeToString(svg);
    const img = new Image();

    // When the image loads, draw it to the canvas and create download link
    img.onload = () => {
      canvas.width = img.width;
      canvas.height = img.height;
      const ctx = canvas.getContext("2d");
      if (ctx) {
        ctx.drawImage(img, 0, 0);
        const pngUrl = canvas.toDataURL("image/png");
        const downloadLink = document.createElement("a");
        downloadLink.href = pngUrl;
        downloadLink.download = `recoddly-${profile.username}-qrcode.png`;
        document.body.appendChild(downloadLink);
        downloadLink.click();
        document.body.removeChild(downloadLink);

        toast({
          title: "QR Code downloaded",
          description: "Your QR code has been downloaded successfully",
        });
      }
    };

    // Convert SVG to data URL
    img.src = `data:image/svg+xml;base64,${btoa(svgData)}`;
  };

  return (
    <div className="min-h-screen bg-secondary/30 flex flex-col">
      <div className=" sticky top-0 z-10 border-b backdrop-blur-md bg-background/80">
        <div className="container max-w-7xl mx-auto flex items-center justify-between p-4">
          <Link
            to="/dashboard"
            className="text-brand-purple hover:underline flex items-center"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="mr-2"
            >
              <path d="m12 19-7-7 7-7"></path>
              <path d="M19 12H5"></path>
            </svg>
            Back to Dashboard
          </Link>

          <div className="flex items-center gap-2">
            <Button variant="outline" size="sm" onClick={handleCopyLink}>
              {copied ? (
                <>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="mr-2"
                  >
                    <path d="M20 6 9 17l-5-5"></path>
                  </svg>
                  Copied!
                </>
              ) : (
                <>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="mr-2"
                  >
                    <rect
                      width="14"
                      height="14"
                      x="8"
                      y="8"
                      rx="2"
                      ry="2"
                    ></rect>
                    <path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"></path>
                  </svg>
                  Copy Link
                </>
              )}
            </Button>

            <Dialog>
              <DialogTrigger asChild>
                <Button variant="outline" size="sm">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="mr-2"
                  >
                    <rect
                      x="3"
                      y="3"
                      width="18"
                      height="18"
                      rx="2"
                      ry="2"
                    ></rect>
                    <rect x="7" y="7" width="3" height="3"></rect>
                    <rect x="14" y="7" width="3" height="3"></rect>
                    <rect x="7" y="14" width="3" height="3"></rect>
                    <rect x="14" y="14" width="3" height="3"></rect>
                  </svg>
                  QR Code
                </Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-md">
                <DialogHeader>
                  <DialogTitle>Your Recoddly QR Code</DialogTitle>
                </DialogHeader>
                <div className="flex flex-col items-center justify-center py-4">
                  <div className="bg-white p-4 rounded-lg">
                    <QRCodeSVG
                      ref={qrRef}
                      value={pageUrl}
                      size={200}
                      level="H" // High error correction capability
                      includeMargin={true}
                      imageSettings={{
                        src: "/qrlogo.png",
                        excavate: true,
                        height: 24,
                        width: 24,
                      }}
                    />
                  </div>
                  <p className="text-sm text-muted-foreground mt-4 mb-2">
                    Share this QR code to let people access your Recoddly page
                  </p>
                  <div className="flex gap-2 mt-2">
                    <Button variant="default" onClick={handleDownloadQRCode}>
                      Download QR Code
                    </Button>
                  </div>
                </div>
              </DialogContent>
            </Dialog>

            <Link to="/dashboard/links">
              <Button size="sm">Edit Page</Button>
            </Link>
          </div>
        </div>
      </div>

      <div className="flex-1 flex items-center justify-center p-6">
        {/* Phone mockup */}
        <div className="w-full max-w-sm">
          <div className="relative mx-auto border-gray-800 dark:border-gray-800 bg-gray-800 border-[14px] rounded-[2.5rem] h-[600px] w-[300px]">
            <div className="h-[32px] w-[3px] bg-gray-800 dark:bg-gray-800 absolute -left-[17px] top-[72px] rounded-l-lg"></div>
            <div className="h-[46px] w-[3px] bg-gray-800 dark:bg-gray-800 absolute -left-[17px] top-[124px] rounded-l-lg"></div>
            <div className="h-[46px] w-[3px] bg-gray-800 dark:bg-gray-800 absolute -left-[17px] top-[178px] rounded-l-lg"></div>
            <div className="h-[64px] w-[3px] bg-gray-800 dark:bg-gray-800 absolute -right-[17px] top-[142px] rounded-r-lg"></div>
            <div className="rounded-[2rem] overflow-hidden w-[272px] h-[572px]">
              <div
                className="w-full h-full flex flex-col overflow-hidden overflow-y-auto"
                style={{
                  background: profile.background,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              >
                {/* Link Page Content */}
                <div className="flex flex-col items-center p-6">
                  <div className="mt-8 mb-4">
                    <div className="w-24 h-24 rounded-full border-4 border-white overflow-hidden bg-white flex items-center justify-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-full h-full text-gray-300"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                        />
                      </svg>
                    </div>
                  </div>

                  <h3
                    className={`font-bold text-lg text-white mb-1 ${profile.fontStyle}`}
                  >
                    @{profile.username}
                  </h3>
                  <p
                    className={`text-white/80 text-sm mb-6 ${profile.fontStyle}`}
                  >
                    {profile.bio}
                  </p>

                  <div className="w-full space-y-3 mb-4">
                    {profile.links.map(link => (
                      <a
                        key={link.id}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`w-full py-3 px-4 rounded-lg text-center ${profile.buttonStyle} block`}
                      >
                        {link.title}
                      </a>
                    ))}
                  </div>

                  <div className="mt-auto pt-6 text-white/70 text-xs">
                    Powered by Recoddly
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Preview;
