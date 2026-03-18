export default function TrainerCard({ trainer }) {
  return (
    <div className="group overflow-hidden rounded-3xl border border-white/5 bg-zinc-950">
      <div className="aspect-[4/5] overflow-hidden bg-zinc-900">
        <img
          src={trainer.image}
          alt={trainer.name}
          className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
        />
      </div>
      <div className="p-5">
        <h3 className="text-xl font-bold text-white">{trainer.name}</h3>
        <p className="mt-1 text-sm font-medium text-yellow-400">{trainer.role}</p>
        <div className="mt-4 flex gap-3 text-zinc-400">
          <a href={trainer.social.instagram} target="_blank" rel="noopener noreferrer">
            <img src="src\assets\images\camera.png" className="h-5 w-5 cursor-pointer transition hover:text-yellow-400" />
          </a>
          <a href={trainer.social.facebook} target="_blank" rel="noopener noreferrer">
            <img src="src\assets\images\communication.png" className="h-5 w-5 cursor-pointer transition hover:text-yellow-400" />
          </a>
          <a href={trainer.social.twitter} target="_blank" rel="noopener noreferrer">
            <img src="src\assets\images\twitter.png" className="h-5 w-5 cursor-pointer transition hover:text-yellow-400" />
          </a>
        </div>
      </div>
    </div>
  );
}