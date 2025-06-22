import { AppSidebar } from "@/components/app-sidebar"
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbList,
  BreadcrumbPage,
} from "@/components/ui/breadcrumb"
import { Separator } from "@/components/ui/separator"
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar"
import { PatronCard } from "@/components/patron/card"
import { patronData } from '@/components/patron/data'


export default function Page() {
  return (
    (<SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <header
          className="bg-background sticky top-0 flex h-16 shrink-0 items-center gap-2 border-b px-4">
          <SidebarTrigger className="-ml-1" />
          <Separator orientation="vertical" className="mr-2 data-[orientation=vertical]:h-4" />
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbPage>October 2024</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </header>
      
 
     <div className="grid auto-rows-min mx-4 my-4 gap-4 md:grid-cols-5">
      {patronData.map((patron) => (
        <PatronCard 
          key={patron.id} 
          name={patron.name}
          photoUrl={patron.photoUrl}
          category={patron.category}
          difficulty={patron.difficulty}
          author={patron.author}
          model={patron.model}
        />
      ))}
    </div>
  
      </SidebarInset>
    </SidebarProvider>)
  );
}
