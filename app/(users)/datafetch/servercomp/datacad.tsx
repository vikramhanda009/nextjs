type DataCardProps = {
  userName?: string;
};

const DataCard = async ({ userName }: DataCardProps) => {
  const name = userName;

  console.log("userName", userName);

  // artificial delay
  await new Promise<void>((resolve) => setTimeout(resolve, 3000));

  let data: {
    name: string;
    gender: string;
    probability: number;
  } | null = null;

  if (name) {
    const res = await fetch(
      `https://api.genderize.io/?name=${name}`,
      { cache: "no-store" }
    );

    if (res.ok) {
      data = await res.json();
    }
  }

  return (
    <>
      {name && data ? (
        <div className="flex flex-col gap-2 p-8">
          <p className="text-lg font-semibold">Name: {data.name}</p>
          <p>Gender: {data.gender}</p>
          <p>Probability: {Math.round(data.probability * 100)}%</p>
        </div>
      ) : (
        <div>No data</div>
      )}
    </>
  );
};

export default DataCard;
