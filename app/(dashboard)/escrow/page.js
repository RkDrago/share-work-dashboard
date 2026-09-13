import EscrowStats from "@/components/escrow/EscrowStats";
import TransactionTable from "@/components/escrow/TransactionTable";

export default function EscrowPage() {
  return (
    <div className="space-y-5">
      <EscrowStats />
      <TransactionTable />
    </div>
  );
}