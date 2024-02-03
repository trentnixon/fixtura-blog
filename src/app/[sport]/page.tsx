export default function Page({ params }: { params: { sport: string } }) {
    return <div>Selected Sport: {params.sport}</div>
  }