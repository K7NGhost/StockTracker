using stocktracker.api.Models;

namespace stocktracker.api.Interfaces
{
    public interface ITokenService
    {
        string CreateToken(AppUser user);
    }
}
