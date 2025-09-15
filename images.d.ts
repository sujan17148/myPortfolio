// images.d.ts
declare module "*.png" {
    const value: string;
    export default value;
  }
  
  declare module "*.jpg" {
    const value: string;
    export default value;
  }
  
  declare module "*.jpeg" {
    const value: string;
    export default value;
  }
  
  declare module "*.gif" {
    const value: string;
    export default value;
  }
  
  declare module "*.svg" {
    import React from "react";
    const content: React.FC<React.SVGProps<SVGSVGElement>>;
    export default content;
  }
  